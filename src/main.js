import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { store } from './store/store';

Vue.config.productionTip = false

let app = null;

//Wait for firebase auth to initialize before creating app
<<<<<<< Updated upstream
firebase.auth().onAuthStateChanged(()=>{
  //init app if not already created
  if(!app){
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
=======


firebase.auth().onAuthStateChanged( () =>{
    //init app if not already created
    if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
>>>>>>> Stashed changes
})


// export const eventBus = new Vue({
//   methods: {
//     changeComponent(cName) {
//       this.$emit('componentWasChanged', cName);
//     },
//     sendDataToResults(data) {
//       this.$emit('dataWasSentToResults', data)
//       console.log("Data made it to event bus in main.js", data)
//     },
//     sendDataToProfile(data) {
//       this.$emit('dataWasSentToProfile', data);
//     }
//   }
// });
