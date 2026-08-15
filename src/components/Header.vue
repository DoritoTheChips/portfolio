<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/projects">Projets</router-link>
      <router-link to="/realisations">Réalisations</router-link>
      <router-link to="/about">À propos</router-link>
      <router-link to="/resume">CV</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
}

// Tabs are navigation chrome, so they opt out of the blue underlined link style.
a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
  text-transform: uppercase;
  margin-left: 8px;
  margin-right: 8px;
  padding: 4px 14px 8px 14px;
  white-space: nowrap;
  display: inline-block;
  background-color: @panelBgColor;
  border-radius: 2px;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

a:hover {
  color: @textColor;
  opacity: 1;
  background-color: @panelHoverBgColor;
}

.router-link-active,
.router-link-exact-active {
  opacity: 1;
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 5px;
    margin-right: 5px;
    padding: 2px 10px;
  }
}

</style>
