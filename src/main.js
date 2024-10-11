import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Importar o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.css'

createApp(App).use(router).mount('#app')
