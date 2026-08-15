<template>
  <div>
    <h1>CV</h1>

    <div class="paragraph">
      Mon CV tient en une page.
      <br />La version PDF garde les liens cliquables vers les projets et mes réseaux :
      <a href="assets/cv/cv-rodin-zemour.pdf" target="_blank" rel="noopener">télécharger le CV (PDF, 6,5 Mo)</a>.
    </div>

    <a class="resume-sheet" href="assets/cv/cv-rodin-zemour.pdf" target="_blank" rel="noopener">
      <img
        src="assets/cv/cv-rodin-zemour.webp"
        width="1400"
        height="2479"
        alt="CV de Rodin Zémour, développeur jeux vidéo junior"
      />
    </a>

    <div class="paragraph">
      Les <router-link to="/projects">projets</router-link> racontent tout ça en détail, et vous
      pouvez me joindre <router-link to="/contact">par ici</router-link>.
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
  margin-bottom: 20px;
}

.resume-sheet {
  display: block;
  max-width: 760px;
  margin: 30px 0px 50px 0px;
}

.resume-sheet img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 2px;
}
</style>
