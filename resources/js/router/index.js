import { createRouter, createWebHistory  } from "vue-router";
import About from '../components/About.vue';
import Home from '../components/Home.vue';
import Register from '../components/Auth/Register.vue';
import Login from '../components/Auth/Login.vue';
import NotFound from '../components/Errors/404.vue';
import Dashboard from '../components/Errors/Dashboard.vue';



const routes = [
    {
        path: '/:any',
        name: 'notfound',
        component: NotFound
    },
    {
        path: '/',
        redirect: '/home' // Redirect root path to '/about'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
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
