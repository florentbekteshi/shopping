import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './PublicRoutes.js';
import privateRoutes from './PrivateRoutes.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [...publicRoutes, ...privateRoutes],
});


export default router
