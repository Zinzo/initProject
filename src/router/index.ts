import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/pages/dashboard/dashboard.vue';
import Root from '@/views/pages/root.vue';
import Login from '@/views/pages/public/login/login.vue';
import PageNotFonund from '@/views/pages/public/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: 'dashboard',
    meta: {title: 'dashboard', public: false},
    component: Dashboard
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Root,
      meta: {title: 'root', public: true},
      children: routes
    },
    {
      path: '*',
      meta: {title: '404', public: true},
      component: PageNotFonund,
    },
    {
      path: '/login',
      meta: {title: 'login', public: true},
      component: Login,
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authenticated = "1111.11111.1111";
  const isPublic = to.matched.some(record => record.meta.public);

  if(to.path === "/" && isPublic) {
    next('/login');
  } else {
    next();
  }
});

export default router;
