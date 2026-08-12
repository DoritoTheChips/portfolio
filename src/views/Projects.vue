<template>
  <div>
    <h1>Projets</h1>

    <div style="margin-bottom: 30px;">
      Une collection de jeux et d'autres trucs que j'ai faits, seul ou en équipe.
    </div>

    <ItemList :items="projects" basePath="/projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ItemList from "@/components/ItemList.vue";
import projectsData from "@/data/ProjectsData.ts";

export default Vue.extend({
  name: "Projects",
  components: {
    ItemList,
  },
  data: function () {
    return {
      projects: projectsData,
    };
  },
});
</script>
