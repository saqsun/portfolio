import type { ReactNode } from "react";
import SkillRate from "../components/SkillRate";

const technologySkills = [
  ["Software Development", 5],
  ["Web Development", 5],
  ["WebGL", 5],
  ["PixiJS", 5],
  ["Phaser", 5],
  ["ActionScript", 5],
  ["Three.js", 4],
  ["Flash/Adobe Animate", 4],
  ["Spine", 4],
  ["Unity", 3],
  ["Babylon.js", 2],
  ["Cocos Creator", 2],
] as const;

const otherSkills = [
  ["Project Management", 5],
  ["Management", 5],
  ["Collaboration", 5],
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
        Principal / Lead Web Game Engineer with 15+ years of experience
        delivering high-performance HTML5 and WebGL games for high-traffic and
        real-money environments. Specialized in scalable game architectures,
        deterministic gameplay, performance optimization, and production-ready
        web game engines.
        <div className="my-5">
          <a
            className="float-left mr-12.5"
            href="/d/Sargis_Sargsyan_-_Principle_Software_Engineer.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-download fa-lg fa-fw" />
            Download as PDF
          </a>
        </div>
      </div>

      <div className="full-content">
        <div className="clear-both" />
        <h2>Work experience</h2>

        <h3>
          Technical Lead -{" "}
          <ExternalLink href="https://playrix.com/">Playrix</ExternalLink>
        </h3>
        <h4>2024-Present</h4>
        <div className="max-w-200">
          Leading development of a next-generation web game and playable
          framework, focused on scalability, performance, and long-term
          maintainability:
          <ul className="my-4 list-disc ps-10">
            <li>
              Designed and drove the architecture of a scalable, future-proof
              framework for 2D and 3D interactive web games.
            </li>
            <li>
              Built internal tooling and automation to improve developer
              productivity and reduce production overhead.
            </li>
            <li>
              Optimized rendering, asset pipelines, and build systems for fast,
              lightweight web experiences.
            </li>
            <li>
              Established reliable production workflows and CI/CD standards in
              collaboration with engineers, artists, and QA.
            </li>
            <li>
              Introduced process and workflow improvements to increase delivery
              speed and consistency across teams.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          TypeScript, WebGL, PixiJS, Three.js, Node.js
        </div>

        <h3>
          Senior Game Engine Developer -{" "}
          <ExternalLink href="https://rubyplay.com/">RubyPlay</ExternalLink>
        </h3>
        <h4>2024-2025</h4>
        <div className="max-w-200">
          Worked on core HTML5 game engine development and optimization for
          iGaming products, focusing on performance, stability, and long-term
          maintainability:
          <ul className="my-4 list-disc ps-10">
            <li>
              Improved game engine performance (game loop, rendering, memory)
              for stable real-money gameplay across devices.
            </li>
            <li>
              Optimized asset loading, startup time, and runtime responsiveness.
            </li>
            <li>
              Implemented monitoring and stability improvements to strengthen
              production reliability.
            </li>
            <li>
              Streamlined deployment and release workflows for frequent game
              updates.
            </li>
            <li>
              Collaborated closely with QA, backend, and frontend teams to
              deliver end-to-end improvements.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">HTML5, TypeScript, WebGL, PixiJS</div>

        <h3>
          Lead HTML5 Game Developer -{" "}
          <ExternalLink href="https://www.voodoo.io/">Voodoo</ExternalLink>
        </h3>
        <h4>2023-2024</h4>
        <div className="max-w-200">
          As the Lead HTML5 Game (Ads) Developer, spearheaded a dynamic team,
          seamlessly blending technology and marketing. In this role:
          <ul className="my-4 list-disc ps-10">
            <li>
              Crafted innovative HTML5 applications that captivated users,
              achieving an increase in user engagement.
            </li>
            <li>
              Employed cutting-edge web technologies and mobile optimization
              techniques, resulting in a 25% improvement in ads performance.
            </li>
            <li>
              Aligned development with marketing strategies, contributing to an
              increase in game downloads.
            </li>
            <li>
              Optimized user experiences across platforms, ensuring
              accessibility.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          PixiJS, Three.js, Node.js, Webpack, TypeScript
        </div>

        <h3>
          Co Founder &amp; CEO -{" "}
          <ExternalLink href="https://armath.ai/">Armath</ExternalLink>
        </h3>
        <h4>2020-2023</h4>
        <div className="max-w-200">
          At Armath, led the charge in propelling the startup into
          collaborations with industry titans such as Twitter, Playrix, and
          Voodoo. These partnerships validated our innovative approach to gaming
          and expanded our reach within the digital marketplace. Highlights
          include:
          <ul className="my-4 list-disc ps-10">
            <li>
              Pioneered playable ads, seamlessly integrating attractive gameplay
              experiences within ads and redefining engagement metrics, setting
              new industry benchmarks.
            </li>
            <li>
              Transformed HTML5 game development, unlocking new dimensions of
              game creation and delivering immersive experiences across
              platforms and devices.
            </li>
            <li>
              Positioned Armath as an industry trailblazer in harnessing the
              potential of HTML5.
            </li>
            <li>
              As Executive Officer, fostered a culture of open communication and
              boundless creativity, channeling collective energy into crafting
              high-quality games that resonate deeply with players.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          PixiJS, Phaser, Three.js, Node.js, Webpack, TypeScript
        </div>

        <h3>
          Co Founder &amp; CEO - <span className="opacity-50">Koreez</span>
        </h3>
        <h4>2016-2020</h4>
        <div className="max-w-200">
          Leading the growth of Koreez, a startup dedicated to bringing
          high-quality games to the digital marketplace. Since founding the
          studio in 2016:
          <ul className="my-4 list-disc ps-10">
            <li>
              Established Koreez as a promising startup with several original
              game ideas.
            </li>
            <li>
              As Executive Officer, focused on product development, product
              strategy, and brand development.
            </li>
            <li>
              Energized the team with constant communication, fostering
              creativity, and developing effective solutions to accomplish
              goals.
            </li>
            <li>
              Driven by a passion for technology, continuously learning to stay
              ahead in the industry.
            </li>
          </ul>
        </div>
        <div className="max-w-200 italic">
          Unity, C#, PixiJS, Phaser, Node.js, Webpack, TypeScript
        </div>

        <h3>
          Senior Software Engineer -{" "}
          <ExternalLink href="https://rockbitegames.com/">
            Rockbite
          </ExternalLink>
        </h3>
        <h4>2014-2015</h4>
        <div className="max-w-200">
          Led the forefront of cross-platform game development for iOS and
          Android, leveraging the power of Java/libGDX/roboVM. Developed the
          innovative{" "}
          <ExternalLink href="https://libgdx.com/wiki/tools/overlap2d#the-original-overlap2d">
            Overlap2D
          </ExternalLink>{" "}
          game editor.
        </div>
        <div className="max-w-200 italic">Java, libGDX, roboVM</div>

        <h3>
          Game Developer -{" "}
          <ExternalLink href="https://plexonic.com/">Plexonic</ExternalLink>
        </h3>
        <h4>2011-2014</h4>
        <div className="max-w-200">
          Directed cross-platform mobile game development for iOS, Android, and
          Facebook, leveraging AS3/Adobe Air/Flash. Played a pivotal role in the
          innovative development of games across multiple platforms, ensuring
          seamless user experiences and broad market reach.
        </div>
        <div className="max-w-200 italic">
          ActionScript 3, Adobe Air, Flash, Starling Framework
        </div>

        <h2>Skills</h2>
        <div className="skill-set desktop:float-left desktop:pr-15">
          <h3>Tools &amp; Technologies</h3>
          {technologySkills.map(([name, rate]) => (
            <SkillRate key={name} name={name} rate={rate} />
          ))}
        </div>
        <div className="skill-set desktop:float-left desktop:pr-15">
          <h3>Other</h3>
          {otherSkills.map(([name, rate]) => (
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
