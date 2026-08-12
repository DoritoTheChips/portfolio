<template>
  <div>
    <h1>CV</h1>

    <div class="paragraph">
      Cette page est encore vide, le CV arrive bientôt.
      <br />En attendant, les <router-link to="/projects">projets</router-link> racontent déjà pas mal de
      choses, et vous pouvez me joindre <router-link to="/contact">par ici</router-link>.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
.paragraph {
  max-width: 700px;
}
</style>
