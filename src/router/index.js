import { createWebHistory, createRouter } from 'vue-router';

const LandingPage = () => import("../components/top_page/LandingPage.vue");

const routes = [
    {
        path: '/',
        name: 'top',
        component: LandingPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
