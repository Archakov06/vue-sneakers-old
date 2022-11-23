<script lang="ts">
import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";

import { useProductsStore } from "./stores/Products";
import { useFavoriteStore } from "./stores/Favorites";

export default {
  components: { Drawer, Header },
  data: () => ({
    cartVisible: false,
  }),
  setup() {
    const productsStore = useProductsStore();
    const favoriteStore = useFavoriteStore();

    productsStore.fetchItems();

    favoriteStore.$subscribe((mutation, state) => {
      window.localStorage.setItem("favorites", JSON.stringify(state.items));
    });

    const favoritesLocalStore = window.localStorage.getItem("favorites");
    const favorites = favoritesLocalStore
      ? JSON.parse(favoritesLocalStore)
      : [];

    favoriteStore.setItems(favorites);

    return {
      favoriteStore,
    };
  },
};
</script>

<template>
  <div class="app">
    <Header :on-click-cart="() => (cartVisible = true)" />
    <Drawer :on-close="() => (cartVisible = false)" :is-visible="cartVisible" />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  width: 1080px;
  margin: 50px auto;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.content {
  padding: 50px;
}
</style>
