import BlurFade from "../effects/BlurFade";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={0.12}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={0.16}>
          <p className="max-w-full font-sans text-base leading-relaxed text-pretty text-muted-foreground [&_a]:rounded-sm [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a:hover]:decoration-foreground [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-ring">
            I’m a hands-on engineer and technical leader with 15+ years across
            HTML5 games, frontend platforms, and developer tooling. My
            experience includes{" "}
            <a href="https://playrix.com/" target="_blank" rel="noreferrer">
              Playrix
            </a>
            ,{" "}
            <a href="https://rubyplay.com/" target="_blank" rel="noreferrer">
              RubyPlay
            </a>
            ,{" "}
            <a href="https://www.voodoo.io/" target="_blank" rel="noreferrer">
              Voodoo
            </a>
            , and{" "}
            <a href="https://www.ixilix.com/" target="_blank" rel="noreferrer">
              Ixilix
            </a>
            , alongside co-founding Armath. I’ve shipped{" "}
            <a href="#games">browser games</a> and build open-source tools like{" "}
            <a
              href="https://reparticlejs.github.io/reparticle/"
              target="_blank"
              rel="noreferrer"
            >
              reparticle
            </a>{" "}
            and{" "}
            <a
              href="https://replayablejs.github.io/replayable/"
              target="_blank"
              rel="noreferrer"
            >
              Replayable
            </a>
            . I care about reusable architecture, browser performance, and
            helping engineering teams do their best work.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
