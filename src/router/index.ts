import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

// Sử dụng dynamic import cho component với TypeScript
const LandingPage = () => import('../components/top_page/LandingPage.vue');

// Định nghĩa kiểu cho các route
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'top',
        component: LandingPage
    },
];

// Tạo router với TypeScript
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
