<script lang="ts">
import Card from "../components/Card.vue";
import { useProductsStore } from "../stores/Products";
import { useCartStore } from "../stores/Cart";
import { useFavoriteStore } from "../stores/Favorites";

export default {
  components: { Card },
  setup() {
    const productsStore = useProductsStore();
    const cartStore = useCartStore();
    const favoriteStore = useFavoriteStore();

    return {
      productsStore,
      cartStore,
      favoriteStore,
    };
  },
};
</script>

<template>
  <h2>Все продукты</h2>
  <div class="products">
    <div
      v-if="productsStore.isLoading"
      v-for="_ in [...Array(8)]"
      class="card-skeleton"
    />
    <Card
      v-for="item in productsStore.items"
      :key="item.id"
      :id="item.id"
      :price="item.price"
      :name="item.title"
      :image-url="item.imageUrl"
      :is-favorite="favoriteStore.isFavorite(item.id)"
      :is-added="cartStore.isAdded(item.id)"
      :on-click-add="() => cartStore.addItem(item)"
      :on-click-favorite="() => favoriteStore.add(item)"
    />
  </div>
</template>

<style lang="scss" scoped>
.card-skeleton {
  height: 333px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 40px;
}
</style>
