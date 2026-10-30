"""Generate optional VP9 previews; retain MP4s and accept only measured wins.
Requires ffmpeg and ffprobe on PATH. Run from the repository root.
"""
import concurrent.futures
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
VIDEOS = ROOT / 'public/videos'


def convert(source):
    mobile = '.mobile.' in source.name
    output = source.with_suffix('.webm')
    candidate = output.with_name(output.stem + '.candidate.webm')
    subprocess.run([
        'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(source),
        '-an', '-c:v', 'libvpx-vp9', '-threads', '2', '-row-mt', '1',
        '-deadline', 'good', '-cpu-used', '4', '-crf', '36' if mobile else '32',
        '-b:v', '0', '-pix_fmt', 'yuv420p', str(candidate),
    ], check=True)
    comparison = subprocess.run([
        'ffmpeg', '-hide_banner', '-i', str(source), '-i', str(candidate),
        '-lavfi', 'ssim', '-f', 'null', '-',
    ], capture_output=True, text=True, check=True)
    score = float(re.findall(r'All:([\d.]+)', comparison.stderr)[-1])
    original_size = source.stat().st_size
    size = candidate.stat().st_size
    accepted = size < original_size * 0.9 and score >= 0.98
    if accepted:
        candidate.replace(output)
    else:
        candidate.unlink()
        output.unlink(missing_ok=True)
    path = '/' + str(source.relative_to(ROOT / 'public'))
    result = dict(source=path, mp4Bytes=original_size, webmBytes=size,
                  ssim=score, accepted=accepted)
    print(f'{"KEEP" if accepted else "MP4 "} {path}: {score:.4f}, {100*(1-size/original_size):.1f}% smaller', flush=True)
    return result


if __name__ == '__main__':
    sources = sorted(VIDEOS.rglob('*.mp4'))
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        results = list(pool.map(convert, sources))
    manifest = {item['source']: item['source'].removesuffix('.mp4') + '.webm'
                for item in results if item['accepted']}
    (ROOT / 'src/data/VideoFormats.json').write_text(json.dumps(manifest, indent=2) + '\n')
    (VIDEOS / 'optimization-report.json').write_text(json.dumps(results, indent=2) + '\n')
    print(f'Accepted {len(manifest)} of {len(results)} WebM candidates.', flush=True)
