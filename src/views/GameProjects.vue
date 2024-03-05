<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px">
      The following are some games I've made or heavily contributed to.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px">
      There is more to see
      <router-link to="/other-projects">here</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default {
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
};
</script>
