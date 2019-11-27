<template>
  <div id="app">
    <Navbar/>
    <main>
      <router-view/>
      <keep-alive>
        <component :is="activeComponent"></component>
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

  import { eventBus } from './main'


  export default {
    name: 'Login',
    data (){
      return {
        activeComponent: 'Home'
      }
    },
    components: {
      Navbar,
      Footer,
      Home,
      Results,
      Profile
    },
    created() {
      eventBus.$on('componentWasChanged', (comp) => {
        this.activeComponent = comp;
        // console.log("This ran");
      });
    }
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
