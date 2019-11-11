import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/about/AboutView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'books',
    // route level code-splitting
    // this generates a separate chunk (books.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "books" */ '../views/books/BooksView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
