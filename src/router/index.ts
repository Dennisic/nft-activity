import { createRouter, createWebHistory } from "vue-router";
let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/activity/index.vue'),
    },
    {
      path: "/activity",
      name: "activity",
      component: () => import('@/views/activity/index.vue'),
    }
  ],
  // 每次切换路由页面滚动到顶部
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
