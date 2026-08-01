import type { ReactNode } from "react";
import SkillRate from "../components/SkillRate";

const engineeringSkills = [
  ["TypeScript / JavaScript", 5],
  ["HTML5 Game Development", 5],
  ["Frontend Architecture", 5],
  ["Game Architecture", 5],
  ["PixiJS", 5],
  ["WebGL / Canvas", 5],
  ["Browser Performance", 5],
  ["Performance Optimization", 5],
  ["Developer Tooling", 5],
  ["Build Tooling & CI/CD", 4],
  ["React", 4],
  ["Physics & Animation", 4],
] as const;

const leadershipSkills = [
  ["Technical Leadership", 5],
  ["Engineering Planning", 5],
  ["Code Reviews & Mentoring", 5],
  ["Cross-Functional Delivery", 5],
  ["Process Improvement", 5],
  ["Production Reliability", 5],
] as const;

const resumeDownloads = [
  {
    label: "HTML5 Game Engineer",
    href: "/d/Sargis_Sargsyan_-_Senior_Lead_HTML5_Game_Engineer.pdf",
  },
  {
    label: "Frontend / Platform Engineer",
    href: "/d/Sargis_Sargsyan_-_Senior_Frontend__Platform_Engineer.pdf",
  },
  {
    label: "Technical / Engineering Lead",
    href: "/d/Sargis_Sargsyan_-_Technical_Lead__Engineering_Lead.pdf",
  },
] as const;

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

export default function Resume() {
  return (
    <div className="resume-page mx-auto max-w-200">
      <h1>Resume</h1>

      <div className="max-w-175 desktop:float-left">
        Senior / Lead HTML5 Game Engineer and hands-on technical leader with 15+
        years of experience building browser games, frontend platforms, reusable
        frameworks, and production tooling. Strong in TypeScript, JavaScript,
        PixiJS, WebGL, browser performance, and developer tooling, with
        experience owning systems from architecture through production and
        mentoring engineering teams.
        <div className="my-5 flex flex-col items-start gap-2">
          {resumeDownloads.map(({ label, href }) => (
            <a href={href} key={href} rel="noreferrer" target="_blank">
              <i className="fa fa-download fa-lg fa-fw mr-2" />
              {label} PDF
            </a>
          ))}
        </div>
      </div>

      <div className="full-content">
        <div className="clear-both" />
        <h2>Work experience</h2>

        <h3>
          Frontend Team Lead - <span className="opacity-50">Ixilix</span>
        </h3>
        <h4>February 2026 – May 2026</h4>
        <div className="max-w-200">
          Led frontend engineering for multiple browser-based products, owning
          architecture, feature delivery, performance, and production releases.
          <ul className="my-4 list-disc ps-10">
            <li>
              Built responsive game interfaces, live-results widgets, side-bet
              flows, profile systems, tutorials, analytics events, and
              backend-integrated features.
            </li>
            <li>
              Improved shared frontend architecture, reusable components, mobile
              layouts, and production stability across multiple branded game
              variants.
            </li>
            <li>
              Reviewed code, planned technical work, mentored developers, and
              coordinated frontend, backend, QA, animation, game design, and
              product teams.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">React, TypeScript, PixiJS</div>

        <h3>
          Technical Lead -{" "}
          <ExternalLink href="https://playrix.com/">Playrix</ExternalLink>
        </h3>
        <h4>June 2025 – January 2026</h4>
        <div className="max-w-200">
          Led development of a reusable HTML5 game framework and production
          pipeline for lightweight, high-performance browser experiences.
          <ul className="my-4 list-disc ps-10">
            <li>
              Designed shared runtime modules, asset-loading systems, templates,
              and development tooling.
            </li>
            <li>
              Built gameplay mechanics, physics interactions, tutorials,
              animations, visual effects, game states, and complete win/fail
              flows.
            </li>
            <li>
              Reduced a production package from approximately 4.5 MB to 1.6 MB
              through asset, loading, and runtime optimization.
            </li>
            <li>
              Established reusable engineering patterns, automation, review
              practices, and delivery workflows that improved production speed
              and release reliability.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          TypeScript, PixiJS, Matter.js, Spine, GSAP
        </div>

        <h3>
          Senior Game Engine Developer -{" "}
          <ExternalLink href="https://rubyplay.com/">RubyPlay</ExternalLink>
        </h3>
        <h4>September 2024 – June 2025</h4>
        <div className="max-w-200">
          Developed reusable HTML5 game-engine systems and production frameworks
          for browser-based games.
          <ul className="my-4 list-disc ps-10">
            <li>
              Built shared runtime modules for game states, asset loading,
              configuration, animation systems, platform integrations, and
              release tooling.
            </li>
            <li>
              Improved engine performance, memory usage, runtime stability, and
              release reliability across multiple production titles.
            </li>
            <li>
              Integrated Sentry and strengthened error tracking, debugging,
              monitoring, and production diagnostics.
            </li>
            <li>
              Resolved rendering, loading, integration, and runtime issues with
              game design, mathematics, backend, QA, and product teams.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">HTML5, TypeScript, WebGL, PixiJS</div>

        <h3>
          Lead HTML5 Game Developer -{" "}
          <ExternalLink href="https://www.voodoo.io/">Voodoo</ExternalLink>
        </h3>
        <h4>September 2023 – September 2024</h4>
        <div className="max-w-200">
          Led development of high-performance HTML5 game experiences for mobile
          web and third-party platforms.
          <ul className="my-4 list-disc ps-10">
            <li>
              Built complete browser-based games with gameplay mechanics,
              controls, game states, animations, visual feedback, and completion
              flows.
            </li>
            <li>
              Created reusable gameplay systems, technical templates, and
              production patterns that accelerated delivery across projects.
            </li>
            <li>
              Optimized code, textures, audio, animations, and asset loading for
              fast startup, small package sizes, and stable mobile performance.
            </li>
            <li>
              Reviewed technical solutions and collaborated with game design,
              art, creative, product, and marketing teams.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          JavaScript, TypeScript, PixiJS, Canvas, WebGL
        </div>

        <h3>
          Co-Founder &amp; CEO -{" "}
          <span className="opacity-50">Armath (formerly Koreez)</span>
        </h3>
        <h4>January 2016 – September 2023</h4>
        <div className="max-w-200">
          Co-founded and led an independent game studio developing mobile, PC,
          and browser-based games for international audiences and clients.
          <ul className="my-4 list-disc ps-10">
            <li>
              Led multidisciplinary teams across engineering, game design, art,
              animation, QA, and production from concept through release.
            </li>
            <li>
              Defined product direction, technical architecture, development
              processes, hiring plans, and delivery workflows.
            </li>
            <li>
              Built gameplay systems, reusable architecture, internal tools, and
              production workflows supporting rapid prototyping and
              multi-platform delivery.
            </li>
            <li>
              Managed client relationships, publishing, delivery, and live
              support while remaining hands-on with engineering; contributed to
              released titles including Roofbot and Parallyzed.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          PixiJS, Phaser, Three.js, Node.js, Webpack, TypeScript
        </div>

        <h3>
          Senior Software Engineer -{" "}
          <ExternalLink href="https://rockbitegames.com/">
            Rockbite
          </ExternalLink>
        </h3>
        <h4>June 2014 – May 2015</h4>
        <div className="max-w-200">
          Developed cross-platform mobile games and internal game-development
          tools for iOS and Android.
          <ul className="my-4 list-disc ps-10">
            <li>
              Implemented gameplay systems, user interfaces, animations, and
              platform-specific functionality using Java, libGDX, and RoboVM.
            </li>
            <li>
              Contributed to{" "}
              <ExternalLink href="https://libgdx.com/wiki/tools/overlap2d#the-original-overlap2d">
                Overlap2D
              </ExternalLink>
              , a visual editor and runtime workflow for 2D game development.
            </li>
            <li>
              Built reusable tools supporting scene creation, asset workflows,
              and cross-platform production.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">Java, libGDX, RoboVM</div>

        <h3>
          Game Developer -{" "}
          <ExternalLink href="https://plexonic.com/">Plexonic</ExternalLink>
        </h3>
        <h4>January 2011 – June 2014</h4>
        <div className="max-w-200">
          Developed mobile and social games for iOS, Android, and Facebook.
          <ul className="my-4 list-disc ps-10">
            <li>
              Implemented gameplay mechanics, levels, UI flows, animations, and
              reusable systems using ActionScript, Adobe AIR, and Flash.
            </li>
            <li>
              Delivered production-ready features across multiple titles and
              platforms.
            </li>
            <li>
              Collaborated with game designers, artists, backend developers, and
              QA throughout development, testing, and release.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          ActionScript 3, Adobe AIR, Flash, Starling Framework
        </div>

        <h2>Skills</h2>
        <div className="skill-set desktop:float-left desktop:pr-15">
          <h3>Engineering</h3>
          {engineeringSkills.map(([name, rate]) => (
            <SkillRate key={name} name={name} rate={rate} />
          ))}
        </div>
        <div className="skill-set desktop:float-left desktop:pr-15">
          <h3>Leadership &amp; Delivery</h3>
          {leadershipSkills.map(([name, rate]) => (
            <SkillRate key={name} name={name} rate={rate} />
          ))}
        </div>
        <div className="clear-both" />

        <h2>Education</h2>
        <h3>National Polytechnic University of Armenia - 2012</h3>
        <h4>Master&apos;s degree</h4>
        <div className="max-w-200">Mathematics and Computer Science</div>
        <h3>National Polytechnic University of Armenia - 2010</h3>
        <h4>Bachelor&apos;s degree</h4>
        <div className="max-w-200">Mathematics and Computer Science</div>

        <h2>Languages</h2>
        <h3>English</h3>
        <div className="max-w-200">Highly proficient</div>
        <h3>Russian</h3>
        <div className="max-w-200">Highly proficient</div>
        <h3>Armenian</h3>
        <div className="max-w-200">Native speaker</div>
      </div>
    </div>
  );
}
