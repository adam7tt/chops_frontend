import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Signup from '@/views/auth/Signup'
import Login from '@/views/auth/Login'
import Results from '@/views/Results-page/Results.vue'
import Result from '@/views/Results-page/Result.vue'
import Profile from '@/views/Professor-profile/Profile.vue'
import firebase from 'firebase'

Vue.use(Router)

const routes = [
  {    
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/profile/:id',
  name: 'Profile',
  component: Profile,
  props: true
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
},
{
  path: '/results',
  name: 'Results',
  component: Results,
  props: true
},
{
  path: '/result',
  name: 'Result',
  component: Result,
  props: true
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