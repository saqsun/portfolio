<template>
  <div>
    <h1>Playable Ads</h1>

    <div style="margin-bottom: 30px">
      And here are some playable ads I've made or heavily contributed to.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default {
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
};
</script>
