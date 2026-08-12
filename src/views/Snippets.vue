<template>
  <div>
    <h1>Snippets</h1>

    <div class="paragraph">
      Cette page est encore vide, à venir.
      <br />En attendant, tout est du côté des <router-link to="/projects">projets</router-link>.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Snippets",
});
</script>

<style scoped>
.paragraph {
  max-width: 700px;
}
</style>
