import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = null;

//Wait for firebase auth to initialize before creating app

export const eventBus = new Vue({
  methods: {
    changeComponent(cName) {
      this.$emit('componentWasChanged', cName);
    },
    sendDataToResults(data) {
      this.$emit('dataWasSentToResults', data);
    },
    sendDataToProfile(data) {
      this.$emit('dataWasSentToProfile', data);
    }
  }
});


firebase.auth().onAuthStateChanged(()=>{
  //init app if not already created
  if(!app){
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
})

