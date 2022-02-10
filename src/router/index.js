import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    alias:'/',
    component: ()=>import("../views/LoginPage.vue")
  },
  {
    path:'/home',
    name:'home',
    component: ()=>import(/* webpackChunkName: "about" */ "../views/HomePage.vue")
  },
  {
    path:'/order',
    name:'order',
    component: ()=>import(/* webpackChunkName: "about" */ "../views/OrderPage.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
