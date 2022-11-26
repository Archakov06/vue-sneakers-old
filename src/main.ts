import { createApp } from "vue";
import * as VueRouter from "vue-router";
import { createPinia } from "pinia";

import Home from "./pages/Home.vue";

const Favorites = () => import("./pages/Favorites.vue");

import "macro-css";
import "./style.scss";

import App from "./App.vue";

const pinia = createPinia();

const routes = [
  { path: "/", component: Home },
  { path: "/favorites", component: Favorites },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
