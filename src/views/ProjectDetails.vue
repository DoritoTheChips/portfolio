<template>
  <ItemDetails
    v-if="project"
    :item="project"
    backPath="/projects"
    backLabel="Retour aux projets"
  />
</template>

<script lang="ts">
import Vue from "vue";
import ItemDetails from "@/components/ItemDetails.vue";
import ProjectData from "@/data/ProjectData.ts";
import projectsData from "@/data/ProjectsData.ts";

export default Vue.extend({
  name: "ProjectDetails",
  components: {
    ItemDetails,
  },
  computed: {
    project(): ProjectData | undefined {
      return projectsData.find((p: ProjectData) => p.id === this.$route.params.id);
    },
  },
  created() {
    if (!this.project) {
      this.$router.replace('/404');
    }
  },
});
</script>
