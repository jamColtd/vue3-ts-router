import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/homePage',
        name:'homePage',
        component:()=> import('../views/homePage/HomePage.vue')
      },
      {
        path: '/paymentsysPage',
        name:'paymentsysPage',
        component:() => import('../views/sys/paymentsysPage.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/404',
    name:'error_404',
    component:() => import('../views/error.vue')
  },
  {
    path:'/',
    name:'login',
    component:() => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router