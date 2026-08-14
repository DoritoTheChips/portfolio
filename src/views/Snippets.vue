<template>
  <div>
    <h1>Réalisations</h1>

    <div style="margin-bottom: 30px;">
      Des musiques, des maps, des modèles 3D et d'autres trucs qui ne sont pas des jeux.
    </div>

    <ItemList :items="snippets" basePath="/realisations" />
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

<style scoped lang="less">

@import '../css/variables.less';

</style>
