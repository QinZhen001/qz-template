import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import RootLayout from '@/views/root/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupPageGuard } from './permission'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: RootLayout,
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404/index.vue'),
  },

  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500/index.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: '/404',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

setupPageGuard(router)

export async function setupRouter(app: App) {
  app.use(router)

  // https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-isReady
  // await router.isReady();
}
