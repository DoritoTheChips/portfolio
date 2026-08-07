<template>
  <div>
    <h1>Snippets</h1>

    <div style="margin-bottom: 30px;">
      Smaller stuff that didn't warrant a full project page: a few songs, some code I keep reaching for,
      and the occasional short video.
    </div>

    <ItemList :items="snippets" basePath="/snippets" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ItemList from "@/components/ItemList.vue";
import snippetsData from "@/data/SnippetsData.ts";

export default Vue.extend({
  name: "Snippets",
  components: {
    ItemList,
  },
  data: function () {
    return {
      snippets: snippetsData,
    };
  },
});
</script>
