<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      Experienced game industry leader with 13+ years, delivering innovative
      gaming experiences. As a dedicated Senior HTML5 Game Engineer, my passion
      lies in pushing the boundaries of interactive entertainment.

      <div style="margin-top: 20px; margin-bottom: 20px">
        <a
          class="download-link"
          href="d/Sargis_Sargsyan_-_Senior_Game_Engineer.pdf"
          target="_blank"
          ><i class="fa fa-download fa-lg fa-fw"></i>Download as PDF</a
        >
      </div>
    </div>
    <div class="full-content">
      <div style="clear: both"></div>
      <h2>Work experience</h2>

      <h3>
        Lead HTML5 Game Developer -
        <a href="https://www.voodoo.io/" target="_blank">Voodoo</a>
      </h3>
      <h4>2023-Present</h4>

      <div>
        As the Lead HTML5 Game (Ads) Developer, spearheaded a dynamic team,
        seamlessly blending technology and marketing. In this role:
        <ul>
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
            Optimized user experiences across platforms, ensuring accessibility.
          </li>
        </ul>
      </div>

      <div class="tech-stack">
        PixiJS, Three.js, Node.js, Webpack, TypeScript
      </div>

      <h3>
        Co Founder & CEO -
        <a href="https://armath.ai/" target="_blank">Armath</a>
      </h3>
      <h4>2020-2023</h4>

      <div>
        At Armath, led the charge in propelling the startup into collaborations
        with industry titans such as Twitter, Playrix, and Voodoo. These
        partnerships validated our innovative approach to gaming and expanded
        our reach within the digital marketplace. Highlights include:
        <ul>
          <li>
            Pioneered playable ads, seamlessly integrating attractive gameplay
            experiences within ads and redefining engagement metrics, setting
            new industry benchmarks.
          </li>
          <li>
            Transformed HTML5 game development, unlocking new dimensions of game
            creation and delivering immersive experiences across platforms and
            devices.
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

      <div class="tech-stack">
        PixiJS, Phaser, Three.js, Node.js, Webpack, TypeScript
      </div>

      <h3>Co Founder & CEO - <a>Koreez</a></h3>
      <h4>2016-2020</h4>

      <div>
        Leading the growth of Koreez, a startup dedicated to bringing
        high-quality games to the digital marketplace. Since founding the studio
        in 2016:
        <ul>
          <li>
            Established Koreez as a promising startup with several original game
            ideas.
          </li>
          <li>
            As Executive Officer, focused on product development, product
            strategy, and brand development.
          </li>
          <li>
            Energized the team with constant communication, fostering
            creativity, and developing effective solutions to accomplish goals.
          </li>
          <li>
            Driven by a passion for technology, continuously learning to stay
            ahead in the industry.
          </li>
        </ul>
      </div>
      <div class="tech-stack">
        Unity, C#, PixiJS, Phaser, Node.js, Webpack, TypeScript
      </div>

      <h3>
        Senior Software Engineer -
        <a href="https://rockbitegames.com/" target="_blank">Rockbite</a>
      </h3>
      <h4>2014-2015</h4>

      <div>
        Led the forefront of cross-platform game development for iOS and
        Android, leveraging the power of Java/libGDX/roboVM. Developed the
        innovative
        <a
          href="https://libgdx.com/wiki/tools/overlap2d#the-original-overlap2d"
          target="_blank"
          >Overlap2D</a
        >
        game editor.
      </div>

      <div class="tech-stack">Java, libGDX, roboVM</div>

      <h3>
        Game Developer -
        <a href="https://plexonic.com/" target="_blank">Plexonic</a>
      </h3>
      <h4>2011-2014</h4>

      <div>
        Directed cross-platform mobile game development for iOS, Android, and
        Facebook, leveraging AS3/Adobe Air/Flash. Played a pivotal role in the
        innovative development of games across multiple platforms, ensuring
        seamless user experiences and broad market reach.
      </div>

      <div class="tech-stack">
        ActionScript 3, Adobe Air, Flash, Starling Framework
      </div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Tools & Technologies</h3>
        <SkillRate name="Software Development" :rate="5" />
        <SkillRate name="Web Development" :rate="5" />
        <SkillRate name="WebGL" :rate="5" />
        <SkillRate name="PixiJS" :rate="5" />
        <SkillRate name="Phaser" :rate="5" />
        <SkillRate name="ActionScript" :rate="5" />
        <SkillRate name="Three.js" :rate="4" />
        <SkillRate name="Flash/Adobe Animate" :rate="4" />
        <SkillRate name="Spine" :rate="4" />
        <SkillRate name="Unity" :rate="3" />
        <SkillRate name="Babylon.js" :rate="2" />
        <SkillRate name="Cocos Creator" :rate="2" />
      </div>

      <div class="skill-set">
        <h3>Other</h3>
        <SkillRate name="Project Management" :rate="5" />
        <SkillRate name="Management" :rate="5" />
        <SkillRate name="Collaboration" :rate="5" />
      </div>
      <div style="clear: both" />

      <h2>Education</h2>

      <h3>National Polytechnic University of Armenia - 2012</h3>
      <h4>Master's degree</h4>
      <div>Mathematics and Computer Science</div>

      <h3>National Polytechnic University of Armenia - 2010</h3>
      <h4>Bachelor's degree</h4>
      <div>Mathematics and Computer Science</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Highly proficient</div>

      <h3>Russian</h3>
      <div>Highly proficient</div>

      <h3>Armenian</h3>
      <div>Native speaker</div>
    </div>
  </div>
</template>

<script lang="ts">
import SkillRate from "@/components/SkillRate.vue";

export default {
  name: "Resume",
  components: {
    SkillRate,
  },
};
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
