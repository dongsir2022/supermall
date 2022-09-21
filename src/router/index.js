import Vue from 'vue'
import VueRouter from 'vue-router'
// import Categories from "@/views/Categories";
// import Home from "@/views/Home";
// import Profile from "@/views/Profile";
// import Shop from "@/views/Shop";

const Categories = () => import('@/views/Categories')
const Home = () => import('@/views/Home')
const Profile = () => import('@/views/Profile')
const Shop = () => import('@/views/Shop')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
