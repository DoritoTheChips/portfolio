<template>
  <div class="item-list">
    <router-link
      v-for="item in items"
      :key="item.id"
      :to="basePath + '/' + item.id"
      class="item-row"
      :class="accentClass(item)"
    >
      <div
        class="item-thumb"
        :style="{ 'background-image': 'url(' + item.iconUrl + ')' }"
      ></div>
      <div class="item-body">
        <div class="item-title-row">
          <span class="item-name">{{ item.name }}</span>
        </div>
        <div class="item-summary">{{ item.summary }}</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface AccentItem {
  type?: string;
  isPublished?: boolean;
}

export default Vue.extend({
  name: "ItemList",
  props: {
    items: Array,
    basePath: String,
  },
  methods: {
    // Snippets always get a fixed off-white accent, projects by published state.
    accentClass(item: AccentItem): string {
      if (item.type) {
        return "is-snippet";
      }
      return item.isPublished ? "is-published" : "is-unpublished";
    },
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.item-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 900px;
}

.item-row {
  display: flex;
  align-items: stretch;
  padding: 12px;
  background-color: fade(@textColor, 4%);
  border-left: 6px solid transparent;
  border-radius: 2px;
  text-decoration: none;
  color: @textColor;
  opacity: 1;
  transition: background-color 0.2s ease, transform 0.15s ease;
}

.item-row:hover {
  background-color: fade(@textColor, 10%);
  opacity: 1;
  transform: translateX(2px);
}

.item-thumb {
  flex: 0 0 auto;
  width: 90px;
  height: 90px;
  background-size: cover;
  background-position: center;
  background-color: @bodyBgColor;
  border-radius: 2px;
}

.item-body {
  flex: 1 1 auto;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.item-title-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 4px;
}

.item-name {
  font-size: 1.2em;
  font-weight: 700;
}

.item-summary {
  font-size: 0.95em;
  opacity: 0.8;
  line-height: 1.4em;
  text-align: left;
}

.item-row.is-published {
  border-left-color: @publishedAccentColor;
}

.item-row.is-unpublished {
  border-left-color: @unpublishedAccentColor;
}

.item-row.is-snippet {
  border-left-color: @textColor;
}

@media only screen and (max-width: 620px){
  .item-thumb {
    width: 64px;
    height: 64px;
  }

  .item-body {
    padding-left: 12px;
  }

  .item-name {
    font-size: 1.05em;
  }
}

</style>
