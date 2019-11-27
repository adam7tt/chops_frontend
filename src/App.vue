<template>
  <div id="app">
    <Navbar/>
    <main>
<<<<<<< Updated upstream
      <router-view/>
=======
      <!-- <router-view/> -->
      <keep-alive>
        <component v:bind :is="component"></component>
      </keep-alive>
>>>>>>> Stashed changes
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/views/Navbar.vue'
  import Footer from '@/views/Footer.vue'
<<<<<<< Updated upstream
  
  export default {
    name: 'Login',
    data (){
      return {
=======
  import Home from './views/Home/Home.vue'
  import Results from './views/Results-page/Results.vue'
  import Profile from './views/Professor-profile/Profile.vue'
  import { store } from './store/store'


  // this.$store.activeComponent = 'Home';

  export default {
    name: 'Login',
    props: {
      comp: Object
    },
    computed: {
      component() {
        // return { ...this.$store.activeComponent }
        // console.log(this.$store.activeComponent);
        // return 'Home';
        return store.activeComponent
>>>>>>> Stashed changes
      }
    },
    components: {
      Navbar,
      Footer,
    },
<<<<<<< Updated upstream
    created() {
    }
=======
>>>>>>> Stashed changes
  }
</script>

<style scoped>
  main {
    flex: 1 0 auto;
  }   
  
  #app {
     display: flex;
     min-height: 100vh;
     flex-direction: column;
  }
</style>
