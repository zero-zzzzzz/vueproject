import Vue from 'vue'
import VueRouter from 'vue-router'
let Home =() => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
let Goods = r=>require(['@/views/Goods.vue'],r)
let Sort =() => import(/* webpackChunkName: "about" */ '@/views/Sort.vue')
let Mine = () => import(/* webpackChunkName: "about" */ '@/views/Mine.vue')
let Login = () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
let Reg = () => import(/* webpackChunkName: "about" */ '@/views/Reg.vue')
let Err = () => import(/* webpackChunkName: "about" */ '@/views/Err.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requireAuth: true }
  },

  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path:'/goods',
    name:'goods',
    component: Goods
  },
  {
    path:'/sort',
    name:'sort',
    component: Sort
  },
  {
    path:'/mine',
    name:'mine',
    component: Mine
  },
  {
    path:'/login',
    name:'login',
    component: Login
  }, 
  {
    path:'/reg',
    name:'reg',
    component: Reg
  }, 
  { path: '/err', name: 'err', component: Err }, // 错误页面
    {
      path: '*', // 未匹配到路由时重定向
      redirect: '/err',
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
