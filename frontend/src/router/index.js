import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/language/c',
    name: 'CView',
    component: () =>
      import(
        /* webpackChunkName: "langauge", webpackPrefetch: true */ '../views/1_language/CView.vue'
      )
  },
  {
    path: '/language/c2',
    name: 'CView2',
    component: () =>
      import(
        /* webpackChunkName: "langauge", webpackPrefetch: true */ '../views/1_language/CView2.vue'
      )
  },
  {
    path: '/Login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "langauge", webpackPrefetch: true */ '../views/LoginView.vue')
  },
  {
    path: '/Option',
    name: 'Option',
    component: () => import('../views/OptionView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
