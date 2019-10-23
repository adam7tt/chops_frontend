import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Citation from './views/Citation.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/citation',
      name: 'citation',
      component: Citation
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
