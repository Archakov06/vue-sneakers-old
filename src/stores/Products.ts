import { defineStore } from 'pinia';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isAdded?: boolean;
  isFavorite?: boolean;
}

interface State {
  items: Product[];
}

export const useProductsStore = defineStore<string, State>('products', {
  state: () => ({ items: [] }),
  getters: {
    totalPrice: (state) => state.items.reduce((sum, obj) => sum + obj.price, 0),
  },
  actions: {
    addToCard(item: Product) {
      this.items.push(item);
    },
  },
});
