<template>
  <div>
    <h1>Projects</h1>

    <div style="margin-bottom: 30px;">
      A collection of games and other things I've built or heavily contributed to.
      Pick one to read the full story.
    </div>

    <ItemList :items="projects" basePath="/projects" />

    <div style="margin-top: 30px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>.
    </div>
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
