<template>
  <div id="app">
    <Navbar class="nav"/>
    <!-- <router-view class="main"/> -->
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>

    <Footer class="footer"/>
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
      });
    }
  }
</script>

<style>

  .main {
     flex: 1 0 auto;
  }   
  
  .app {
     display: flex;
     min-height: 100vh;
     flex-direction: column;
  }

  /* .app{
    text-align: center;
  }

  .nav {
    width: 80%;
  }

  .footer{
    width: 80%;
  } */

</style>
