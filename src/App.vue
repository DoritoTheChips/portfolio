<template>
  <div id="app">
    <div class="page-background" aria-hidden="true">
      <div class="page-background-stack" :style="stackStyle">
        <div
          v-for="tile in tileCount"
          :key="tile"
          class="page-background-tile"
          :class="{ 'is-mirrored': tile % 2 === 0 }"
          :style="tileStyle"
        ></div>
      </div>
    </div>
    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

// Height / width of assets/background.png, used to size one tile of the background.
const backgroundAspectRatio = 2952 / 4968;
// How much slower than the page the background layer scrolls.
const parallaxFactor = 0.3;
const minimumTileHeight = 320;

// Readers who asked for less motion get a background pinned to the viewport.
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  },
  data() {
    return {
      tileHeight: minimumTileHeight,
      tileCount: 1,
      parallaxOffset: 0,
      pendingFrame: 0
    };
  },
  computed: {
    tileStyle(): Record<string, string> {
      return {
        height: this.tileHeight + 'px',
        // Relative URL so it resolves against the /portfolio/ public path too.
        backgroundImage: 'url(assets/background.png)'
      };
    },
    stackStyle(): Record<string, string> {
      return { transform: 'translate3d(0, ' + -this.parallaxOffset + 'px, 0)' };
    }
  },
  methods: {
    scheduleBackgroundUpdate() {
      if (this.pendingFrame) {
        return;
      }
      this.pendingFrame = window.requestAnimationFrame(() => {
        this.pendingFrame = 0;
        this.updateBackground();
      });
    },
    // Deliberately measures nothing but the window: reading the page height here
    // would force a layout on every scrolled frame and make the parallax stutter.
    updateBackground() {
      const viewportHeight = window.innerHeight;
      const factor = reducedMotionQuery.matches ? 0 : parallaxFactor;

      this.tileHeight = Math.max(
        Math.round(window.innerWidth * backgroundAspectRatio),
        minimumTileHeight
      );
      this.parallaxOffset = Math.round(window.pageYOffset * factor);
      // The stack starts at the offset it has drifted by, so it needs enough tiles
      // to reach the bottom of the viewport from there, plus one being scrolled in.
      this.tileCount =
        Math.ceil((this.parallaxOffset + viewportHeight) / this.tileHeight) + 1;
    }
  },
  mounted() {
    this.updateBackground();
    window.addEventListener('scroll', this.scheduleBackgroundUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleBackgroundUpdate);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scheduleBackgroundUpdate);
    window.removeEventListener('resize', this.scheduleBackgroundUpdate);
    if (this.pendingFrame) {
      window.cancelAnimationFrame(this.pendingFrame);
    }
  }
});

// Preload the first project thumbnails so the projects list feels instant
Helpers.preloadImages([
  "assets/projects/icons/dashlab.png",
  "assets/projects/icons/boingy-breaker.png",
  "assets/projects/icons/bagarre.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

// Only html gets the fallback color: a background on body would paint over the
// negative z-index photo layer below.
html {
  background-color: #000000;
}

body {
  margin: 0px;
}

// Fixed photo layer behind every page. It sits at a negative z-index so it paints
// under all the in-flow content without needing a stacking context of its own.
.page-background {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

// Scrim over the photo, so page copy stays readable whatever the tile shows.
.page-background::after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: @pageScrimColor;
}

.page-background-stack {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  will-change: transform;
}

.page-background-tile {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // Tiles overlap by a pixel so subpixel rounding can't show a seam between them.
  margin-bottom: -1px;
}

// Every other tile is flipped, so a page taller than the photo reads as a mirrored
// repeat instead of a hard seam.
.page-background-tile.is-mirrored {
  transform: scaleY(-1);
}

#app {
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @linkColor;
  text-decoration: underline;
  opacity: 1;
}
a:hover {
  color: @linkHoverColor;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
