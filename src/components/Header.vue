<script lang="ts">
import { useCartStore } from "../stores/Cart";
// @ts-ignore
import { CountUp } from "countup.js";
import { computed, defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    onClickCart: Function as PropType<(payload: MouseEvent) => void>,
  },
  watch: {
    totalPrice(val: number) {
      if (this.countUpRef) {
        this.countUpRef.update(val);
      }
    },
  },
  mounted() {
    if (this.totalPriceRef) {
      this.countUpRef = new CountUp(this.totalPriceRef, 0, {
        duration: 1,
      });
    }
  },
  setup() {
    const cartStore = useCartStore();

    const totalPrice = computed(() => cartStore.totalPrice);

    const totalPriceRef = ref<HTMLSpanElement | null>(null);
    const countUpRef = ref<CountUp | null>(null);

    return {
      totalPrice,
      totalPriceRef,
      countUpRef,
    };
  },
});
</script>

<template>
  <div class="header">
    <div class="headerLeft">
      <router-link to="/">
        <img src="../assets/logo.png" width="40" height="40" />
        <div>
          <h2>Vue Sneakers</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </router-link>
    </div>
    <div class="headerRight">
      <ul>
        <li @click="onClickCart" class="cartButton">
          <img src="../assets/cart.svg" />
          <span><span ref="totalPriceRef" /> руб.</span>
        </li>
        <li>
          <router-link to="/favorites">
            <img src="../assets/favorite.svg" />
          </router-link>
        </li>
        <li>
          <img src="../assets/user.svg" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid #eaeaea;
}

.headerLeft {
  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;

    img {
      margin-right: 15px;
    }

    h2 {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
    }

    p {
      color: #9d9d9d;
      font-size: 14px;
    }

    h2,
    p {
      margin: 0;
    }
  }
}

.headerRight {
  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline-flex;
      align-items: center;
      margin-left: 30px;

      &:first-of-type {
        img {
          margin-right: 10px;
        }
      }
    }
  }
}

.cartButton {
  cursor: pointer;
}
</style>
