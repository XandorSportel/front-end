import { createRouter, createWebHistory } from 'vue-router'

import GuestLayout from '../layouts/GuestLayout.vue';

import HomeView from '../views/HomeView.vue';
import KattenView from '../views/KattenView.vue';
import HondenView from '../views/HondenView.vue';
import KonijnenView from '../views/KonijnenView.vue';
import SEOView from '../views/SEOView.vue';
import SitemapView from '../views/SitemapView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: GuestLayout,
      children: [
        { path: '/home', name: 'home', component: HomeView },
        { path: '/katten', name: 'katten', component: KattenView },
        { path: '/honden', name: 'honden', component: HondenView },
        { path: '/konijnen', name: 'konijnen', component: KonijnenView },
        { path: '/seo', name: 'seo', component: SEOView },
        { path: '/sitemap', name: 'sitemap', component: SitemapView },
      ]
    }
  ]
})

export default router
