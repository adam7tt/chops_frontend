<template>
  <div id="app">
    <Navbar class="nav"/>
    <router-view/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue'
import Footer from '@/views/Footer.vue'

  export default {
    name: 'Login',
    data (){
      return {
      }
    },
    components: {
      Navbar,
      Footer,
    }
  }
</script>

<style scoped>

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
