import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import ImpactoAmbientalView from './views/ImpactoAmbientalView.vue';
import TiposDeModaView from './views/TiposDeModaView.vue';
import BauruView from './views/BauruView.vue';
import SujeitoView from './views/SujeitoView.vue';
import QuemSomosView from './views/QuemSomosView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/impacto-ambiental', name: 'ImpactoAmbiental', component: ImpactoAmbientalView },
  { path: '/tipos-de-moda', name: 'TiposDeModa', component: TiposDeModaView },
  { path: '/bauru', name: 'Bauru', component: BauruView },
  { path: '/sujeito', name: 'Sujeito', component: SujeitoView },
  { path: '/quem-somos', name: 'QuemSomos', component: QuemSomosView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/moda-circular-bauru/'),
  routes,
  scrollBehavior() {
        // Volta para o topo da página ao navegar
        return { top: 0, behavior: 'smooth' }; // Rolagem suave até o topo
  },
});

export default router;
