export default function About() {
  return (
    <div className="mx-auto mb-20 max-w-225">
      <h1>Hello!</h1>

      <div className="desktop:flex desktop:items-start desktop:gap-8">
        <div className="mb-5 desktop:min-w-0 desktop:flex-1">
          <div>
            I&apos;m <strong>Sargis Sargsyan</strong>, a Senior / Lead HTML5
            Game Engineer and hands-on technical leader with 15+ years of
            experience building browser games, interactive products, reusable
            frameworks, and production tooling.
          </div>

          <div className="mt-6">
            Recent experience includes frontend and game-engineering roles at{" "}
            <a href="https://playrix.com/" rel="noreferrer" target="_blank">
              Playrix
            </a>
            ,{" "}
            <a href="https://rubyplay.com/" rel="noreferrer" target="_blank">
              RubyPlay
            </a>{" "}
            and{" "}
            <a href="https://www.voodoo.io/" rel="noreferrer" target="_blank">
              Voodoo
            </a>
            , plus co-founding Armath. The work spans TypeScript, React, PixiJS,
            WebGL, game architecture, developer tooling, and mobile performance
            optimization.
          </div>

          <div className="mt-6">
            Highlights include reducing a game package from approximately 4.5 MB
            to 1.6 MB and designing reusable frameworks that improve delivery
            speed across teams.
          </div>

          <div className="mt-10">
            Currently interested in <strong>Senior and Lead roles</strong> in
            HTML5 gaming, interactive products, and frontend platforms. If
            you&apos;re looking for someone who combines deep technical
            expertise with leadership and product thinking, feel free to reach
            out at{" "}
            <a href="mailto:sargissargsyan@icloud.com">
              sargissargsyan@icloud.com
            </a>
          </div>
        </div>

        <div className="mt-12.5 shrink-0 text-center desktop:mt-0 desktop:py-2.5">
          <img
            className="mx-auto desktop:mx-0"
            src="/img/avatar.png"
            alt="Avatar of Sargis"
          />
        </div>
      </div>
    </div>
  );
}
