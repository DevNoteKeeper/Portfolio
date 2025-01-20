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
import ProjectUpload from '../pages/ProjectUpload.vue';
import LoginPopup from '../components/LoginPopup.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/stack', component: Stack },
    { path: '/project', component: Project },
    { path: '/education', component: Education },
    { path: '/career', component: Career },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/projects', component: Projects },
    {
        path: '/project-upload',
        component: ProjectUpload, // 업로드 페이지 경로
        meta: { requiresAdmin: true }, // 관리자 권한이 필요한 경로
    },
    { path: '/login-popup', component: LoginPopup },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 네비게이션 가드 추가
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    // 관리자 권한이 필요한 페이지 처리
    if (to.meta.requiresAdmin) {
        if (!isLoggedIn) {
            alert('Please log in first.');
            return next('/login'); // 로그인 안 된 경우 로그인 페이지로
        }
        if (!isAdmin) {
            alert('Access Denied: Admins only!');
            return next('/'); // 관리자가 아닌 경우 홈으로 리다이렉트
        }
    }

    next(); // 조건 충족 시 정상적으로 이동
});


export default router;
