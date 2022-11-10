<script setup lang="ts">
import Header from './components/Header.vue';
import Card from './components/Card.vue';
</script>

<script setup lang="ts">
import { useProductsStore } from './stores/Products';

const store = useProductsStore();

console.log(store);
</script>

<template>
  <div class="app">
    <Header />
    <div class="products">
      <Card
        :id="0"
        :price="1500"
        name="Мужские Кроссовки Nike Blazer Mid Suede"
        image-url="src/assets/sneakers/1.jpg"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 1080px;
  height: 100vh;
  margin: 0 auto;
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
</style>
