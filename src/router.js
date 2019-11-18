import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'
import About from '@/views/About.vue'
import Citation from '@/views/Citation.vue'
import Signup from '@/views/auth/Signup'
import Login from '@/views/auth/Login'
import firebase from 'firebase'

Vue.use(Router)

const routes = [
  {    
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/about',
  name: 'about',
  component: About
},
{
  path: '/citation',
  name: 'citation',
  component: Citation
},
{
  path:'/signup',
  name: 'Signup',
  component: Signup
},
{
  path:'/login',
  name:'Login',
  component: Login
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//logic to guard route to home from users not logged in
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // User is signed in. Proceed to route
      next()
    } else {
      // No user is signed in. Redirect to login
      next({
        name: 'Login'
      })
    }
  } else {
    // if route is not guarded by auth, proceed
    next()
  }
})

export default router