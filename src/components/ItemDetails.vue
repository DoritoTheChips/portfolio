<template>
  <div>
    <h1>{{ item.name }}</h1>

    <div
      class="item-content"
      :class="accentClass"
    >
      <div v-html="item.htmlDescription"></div>
    </div>

    <div class="item-related" v-if="relatedProjects.length">
      <h3>Projets liés</h3>
      <ul>
        <li v-for="relatedProject in relatedProjects" :key="relatedProject.id">
          <router-link :to="'/projects/' + relatedProject.id">{{ relatedProject.name }}</router-link>
        </li>
      </ul>
    </div>

    <div class="item-back">
      <router-link :to="backPath">← {{ backLabel }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

interface DetailItem {
  id: string;
  name: string;
  htmlDescription: string;
  type?: string;
  isPublished?: boolean;
}

interface RelatedProject {
  id: string;
  name: string;
}

export default Vue.extend({
  name: "ItemDetails",
  props: {
    item: {
      type: Object as PropType<DetailItem>,
      required: true,
    },
    backPath: {
      type: String,
      required: true,
    },
    backLabel: {
      type: String,
      required: true,
    },
    relatedProjects: {
      type: Array as PropType<RelatedProject[]>,
      default: () => [],
    },
  },
  computed: {
    // Snippets always get a fixed off-white accent, projects by published state.
    accentClass(): string {
      if (this.item.type) {
        return "is-snippet";
      }
      return this.item.isPublished ? "is-published" : "is-unpublished";
    },
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.item-content {
  border-left: 4px solid transparent;
  padding-left: 20px;
}

.item-content.is-published {
  border-left-color: @publishedAccentColor;
}

.item-content.is-unpublished {
  border-left-color: @unpublishedAccentColor;
}

.item-content.is-snippet {
  border-left-color: @textColor;
}

.item-related {
  margin-top: 50px;
  padding: 16px 20px;
  background-color: fade(@textColor, 4%);
  border-radius: 2px;
}

.item-related h3 {
  margin: 0px 0px 8px 0px;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

.item-related ul {
  margin: 0px;
  padding-left: 20px;
}

.item-back {
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid fade(@textColor, 15%);
}

@media only screen and (max-width: 620px){
  .item-content {
    padding-left: 12px;
  }
}

</style>
