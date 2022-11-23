<script lang="ts" setup>
import { Product } from "../stores/Products";

defineProps<{
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isAdded?: boolean;
  isFavorite?: boolean;
  onClickAdd?: (item: Product) => void;
  onClickFavorite?: (item: Product) => void;
}>();
</script>

<template>
  <div class="card">
    <div
      class="favorite"
      @click="onClickFavorite({ id, imageUrl, name, price })"
    >
      <img
        v-if="!isFavorite"
        class="plus"
        src="../assets/unliked.svg"
        alt="Plus"
      />
      <img v-else class="plus" src="../assets/liked.svg" alt="Added" />
    </div>
    <img class="image" v-bind:src="'src/assets/' + imageUrl" alt="Sneakers" />
    <h5>{{ name }}</h5>
    <div class="details">
      <div class="price">
        <span>Цена:</span>
        <b>{{ price }} руб.</b>
      </div>
      <div @click="onClickAdd({ id, imageUrl, name, price })">
        <img
          v-if="!isAdded"
          class="plus"
          src="../assets/btn-plus.svg"
          alt="Plus"
        />
        <img v-else class="plus" src="../assets/btn-checked.svg" alt="Added" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid #f3f3f3;
  padding: 30px;
  border-radius: 40px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }

  span {
    font-size: 13px;
    opacity: 0.5;
    text-transform: uppercase;
  }

  b {
    font-size: 14px;
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
  }
}

.image {
  width: 150px;
  height: 150px;
}

.plus {
  cursor: pointer;
}

.favorite {
  position: absolute;
  cursor: pointer;
}

.price {
  display: flex;
  flex-direction: column;
}

.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
