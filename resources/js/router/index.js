import { createRouter, createWebHistory  } from "vue-router";
import About from '../components/About.vue';
import Home from '../components/Home.vue';

const routes = [
    {
        path: '/',
        redirect: '/home' // Redirect root path to '/about'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory (),
    routes
});

export default router;
