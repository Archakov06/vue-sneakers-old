<script lang="ts">
import { useCartStore } from "../stores/Cart";

export default {
  props: {
    isVisible: Boolean,
    onClose: Function,
  },
  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    };
  },
};
</script>

<template>
  <div
    class="overlay"
    :class="{ overlay: 'overlay', overlayVisible: isVisible }"
  >
    <div class="drawer">
      <h2 class="d-flex justify-between mb-30">
        Корзина
        <img
          @click="onClose"
          class="cu-p"
          src="src/assets/btn-remove.svg"
          alt="Close"
        />
      </h2>

      <div class="d-flex flex-column flex">
        <div class="items flex">
          <div
            v-for="item in cartStore.items"
            key="item.id"
            class="cartItem d-flex align-center mb-20"
          >
            <div
              v-bind:style="'src/assets/' + item.imageUrl"
              class="cartItemImg"
            ></div>

            <div class="mr-20 flex">
              <p class="mb-5">{{ item.title }}</p>
              <b>{{ item.title }} руб.</b>
            </div>
            <img
              class="removeBtn"
              src="src/assets/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div class="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{{ cartStore.totalPrice }} руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>{{ (cartStore.totalPrice / 100) * 5 }} руб. </b>
            </li>
          </ul>
          <button onClick="{onClickOrder}" class="greenButton">
            Оформить заказ <img src="src/assets/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s ease-out, visibility 0.1s ease-out;
  overflow: hidden;
}

.overlayVisible {
  visibility: visible;
  opacity: 1;

  .drawer {
    transform: translateX(0);
  }
}

.drawer {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 420px;
  height: 100%;
  right: 0;
  background: #ffffff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  .items {
    flex: 1;
    overflow: auto;
    margin-bottom: 40px;
  }

  h2 {
    margin: 0;
  }
}
</style>
