import { defineStore } from "pinia";
import { Product } from "./Products";

interface State {
  items: Product[];
}

export const useFavoriteStore = defineStore("favorite", {
  state: (): State => ({ items: [] }),
  getters: {
    isFavorite: (state) => {
      return (id: number) => {
        return state.items.some((o) => o.id === id);
      };
    },
  },
  actions: {
    setItems(items: Product[]) {
      console.log(items, 999);
      this.items = items;
    },
    add(item: Product) {
      const find = this.items.find((o) => o.id === item.id);

      if (find) {
        this.items = this.items.filter((o) => o.id !== item.id);
      } else {
        this.items.push(item);
      }
    },
  },
});
