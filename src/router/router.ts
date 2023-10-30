import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../pages/index/home/index.vue'),
        alias: '/',
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
