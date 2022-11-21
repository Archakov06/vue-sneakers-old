<script lang="ts">
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

import { useProductsStore } from "./stores/Products";
import { myInjectionKey } from "./test";

export default {
  components: { Header, Card },
  provide: {
    [myInjectionKey]: "222",
  },
  setup() {
    const store = useProductsStore();

    store.fetchItems();

    const onClickAdd = (id: number) => {
      console.log(id);
    };

    return {
      store,
      onClickAdd,
    };
  },
};
</script>

<template>
  <div class="app">
    <Header />
    <div class="products">
      <div
        v-if="store.isLoading"
        v-for="item in [...Array(8)]"
        class="card-skeleton"
      />
      <Card
        v-for="item in store.items"
        :key="item.id"
        :id="item.id"
        :price="item.price"
        :name="item.title"
        :image-url="item.imageUrl"
        :on-click-add="onClickAdd"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 1080px;
  height: 100vh;
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
  padding: 50px;
}

.card-skeleton {
  height: 333px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 40px;
}
</style>
