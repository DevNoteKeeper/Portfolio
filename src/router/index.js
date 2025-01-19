import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Stack from '../views/Stack.vue';
import Project from '../views/Project.vue';
import Education from '../views/Education.vue';
import Career from '../views/Career.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';

const routes = [
    {path: '/', component: Home },
    {path: '/about', component: About },
    {path: '/stack', component: Stack },
    {path: '/project', component: Project },
    {path: '/education', component: Education },
    {path: '/career', component: Career },
    {path: '/contact', component: Contact },
    {path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;