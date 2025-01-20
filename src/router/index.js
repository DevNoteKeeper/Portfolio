import { createRouter, createWebHistory } from 'vue-router';
import Home from '../section/Home.vue';
import About from '../section/About.vue';
import Stack from '../section/Stack.vue';
import Project from '../section/Project.vue';
import Education from '../section/Education.vue';
import Career from '../section/Career.vue';
import Contact from '../section/Contact.vue';
import Login from '../section/Login.vue';
import Projects from '../pages/Projects.vue';

const routes = [
    {path: '/', component: Home },
    {path: '/about', component: About },
    {path: '/stack', component: Stack },
    {path: '/project', component: Project },
    {path: '/education', component: Education },
    {path: '/career', component: Career },
    {path: '/contact', component: Contact },
    {path: '/login', component: Login },
    {path: '/projects', component: Projects},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;