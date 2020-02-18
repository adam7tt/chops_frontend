import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import store from '@/store/store.js'

Vue.config.productionTip = false

let app = null;

//Wait for firebase auth to initialize before creating app
firebase.auth().onAuthStateChanged(()=>{
  //init app if not already created
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

