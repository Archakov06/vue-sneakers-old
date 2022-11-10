import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './style.scss';

import App from './App.vue';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.mount('#app');
