<template>
  <div id="app">
    <Navbar/>
    <main>
      <!-- <router-view/> -->
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/views/Navbar.vue'
  import Footer from '@/views/Footer.vue'
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
        return 'Home';
        // return store.activeComponent
      }
    },
    components: {
      Navbar,
      Footer,
      Home,
      Results,
      Profile
    },
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
