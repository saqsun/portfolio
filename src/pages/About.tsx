export default function About() {
  return (
    <div className="mx-auto mb-20 max-w-253.5">
      <h1>Hello!</h1>

      <div className="mb-5 max-w-175 desktop:float-left">
        <div>
          I&apos;m <strong>Sargis Sargsyan</strong>, a leading HTML5 Game
          Engineer specializing in high-performance games and playable ads. I’ve
          spearheaded projects at{" "}
          <a href="https://playrix.com/" rel="noreferrer" target="_blank">
            Playrix
          </a>
          ,{" "}
          <a
            href="https://www.adexchanger.com/platforms/twitter-acquires-mobile-dsp-crossinstall-on-the-hunt-for-mobile-performance-dollars/"
            rel="noreferrer"
            target="_blank"
          >
            CrossInstall
          </a>{" "}
          and{" "}
          <a href="https://www.voodoo.io/" rel="noreferrer" target="_blank">
            Voodoo
          </a>
          , and co-founded startups including{" "}
          <a href="https://armath.ai/" rel="noreferrer" target="_blank">
            Armath
          </a>{" "}
          and Koreez. I hold a Master&apos;s degree in Mathematics and Computer
          Science.
        </div>

        <div className="mt-6">
          Over the years, I’ve built and led products used by tens of millions
          of players, focusing on performance, scalability, and real business
          impact. I care deeply about architecture, developer experience, and
          building systems that scale with teams.
        </div>

        <div className="mt-10">
          I’m currently exploring{" "}
          <strong>Senior, Lead, or Executive-level roles</strong> in gaming or
          interactive products. If you’re looking for someone who combines deep
          technical expertise with leadership and product thinking, feel free to
          reach out at{" "}
          <a href="mailto:sargissargsyan@icloud.com">
            sargissargsyan@icloud.com
          </a>
        </div>
      </div>

      <div className="mt-12.5 text-center desktop:float-left desktop:py-2.5 desktop:pr-2.5 desktop:pl-20">
        <img
          className="mx-auto desktop:mx-0"
          src="/img/avatar.png"
          alt="Avatar of Sargis"
        />
      </div>

      <div className="clear-both" />
    </div>
  );
}
