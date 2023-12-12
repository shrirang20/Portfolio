import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@fontsource/koho/200.css';
import '@fontsource/koho/300.css';
import '@fontsource/koho/400.css';
import '@fontsource/koho/500.css';
import '@fontsource/koho/600.css';
import '@fontsource/koho/700.css';
// Supports weights 300-800
import '@fontsource-variable/open-sans';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fas, far, faClock, fab);

import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
    config: { id: "G-79PXEFGWC7" }
  }).component('fa', FontAwesomeIcon).use(router).mount('#app');
