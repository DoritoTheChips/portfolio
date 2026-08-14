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
        :class="{ 'is-placeholder': !item.iconUrl }"
        :style="thumbStyle(item)"
      >{{ item.iconUrl ? "" : initial(item) }}</div>
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
  name: string;
  iconUrl: string;
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
    // Items without an icon fall back to a plain initial on the thumb background.
    thumbStyle(item: AccentItem): Record<string, string> {
      if (!item.iconUrl) {
        return {};
      }
      return { "background-image": "url(" + item.iconUrl + ")" };
    },
    initial(item: AccentItem): string {
      return item.name ? item.name.charAt(0).toUpperCase() : "";
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

// Whole-row links are chrome, so they opt out of the blue underlined link style.
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
  color: @textColor;
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

.item-thumb.is-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2em;
  font-weight: 700;
  opacity: 0.35;
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
