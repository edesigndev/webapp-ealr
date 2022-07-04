import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Notes from '@/views/Notes.vue';
import Users from '@/views/Users.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requireAuth: true, layout: 'dashboard' },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { layout: 'default' },
    },
    {
      path: '/notas',
      name: 'notas',
      component: Notes,
      meta: { requireAuth: true, layout: 'dashboard' },
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Users,
      meta: { requireAuth: true, layout: 'dashboard' },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'default' },
    },
    { path: '*', redirect: '/', meta: { layout: 'Error' } },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');
  if (authRequired && !loggedIn) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
