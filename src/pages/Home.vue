<script lang="ts">
import Card from "../components/Card.vue";
import { useProductsStore } from "../stores/Products";
import { useCartStore } from "../stores/Cart";
import { useFavoriteStore } from "../stores/Favorites";
import { defineComponent } from "vue";

type Data = {
  searchValue: string;
};

export default defineComponent({
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
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    getProducts() {
      return this.productsStore.items.filter((o) =>
        o.title.includes(this.searchValue)
      );
    },
  },
  methods: {
    clearSearchValue() {
      this.searchValue = "";
    },
  },
});
</script>

<template>
  <div className="d-flex align-center justify-between mb-20">
    <h1>
      {{ searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки" }}
    </h1>
    <div className="search-block d-flex">
      <img src="src/assets/search.svg" alt="Search" />
      <img
        v-if="searchValue"
        className="clear
      cu-p"
        src="src/assets/btn-remove.svg"
        @click="clearSearchValue"
        alt="Clear"
      />
      <input v-model="searchValue" placeholder="Поиск..." />
    </div>
  </div>
  <div class="products">
    <div
      v-if="productsStore.isLoading"
      v-for="_ in [...Array(8)]"
      class="card-skeleton"
    />
    <Card
      v-for="item in getProducts"
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
.search-block {
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  padding: 0 15px;
  position: relative;

  .clear {
    position: absolute;
    right: 0;
    width: 18px;
    height: 18px;
    top: 14px;
    right: 15px;
  }

  input {
    border: 0;
    padding: 13px;
    font-size: 16px;
    width: 200px;
    outline: none;
  }
}
</style>
