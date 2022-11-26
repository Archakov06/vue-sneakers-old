import { defineStore } from "pinia";
import { Product } from "./Products";

interface State {
  items: Product[];
}

export const useCartStore = defineStore("cart", {
  state: (): State => ({ items: [] }),
  getters: {
    totalPrice: (state) => state.items.reduce((sum, obj) => sum + obj.price, 0),
    isAdded: (state) => {
      return (id: number) => {
        return state.items.some((o) => o.id === id);
      };
    },
  },
  actions: {
    addItem(item: Product) {
      const find = this.items.find((o) => o.id === item.id);

      if (find) {
        this.items = this.items.filter((o) => o.id !== item.id);
      } else {
        this.items.push(item);
      }
    },
  },
});
