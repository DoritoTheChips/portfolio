<template>
  <ItemDetails
    v-if="snippet"
    :item="snippet"
    :relatedProjects="relatedProjects"
    backPath="/realisations"
    backLabel="Retour aux réalisations"
  />
</template>

<script lang="ts">
import Vue from "vue";
import ItemDetails from "@/components/ItemDetails.vue";
import ProjectData from "@/data/ProjectData.ts";
import projectsData from "@/data/ProjectsData.ts";
import SnippetData from "@/data/SnippetData.ts";
import snippetsData from "@/data/SnippetsData.ts";

export default Vue.extend({
  name: "SnippetDetails",
  components: {
    ItemDetails,
  },
  computed: {
    snippet(): SnippetData | undefined {
      return snippetsData.find((s: SnippetData) => s.id === this.$route.params.id);
    },
    relatedProjects(): ProjectData[] {
      const snippet = this.snippet;
      if (!snippet) {
        return [];
      }

      const projects: ProjectData[] = [];
      snippet.projectIds.forEach((id: string) => {
        const project = projectsData.find((p: ProjectData) => p.id === id);
        if (project) {
          projects.push(project);
        }
      });
      return projects;
    },
  },
  created() {
    if (!this.snippet) {
      this.$router.replace('/404');
    }
  },
});
</script>
