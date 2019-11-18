<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue'
import Footer from '@/views/Footer.vue'

  export default {
    name: 'Login',
    data (){
      return{

      }
    },
    components: {
      Navbar,
      Footer,
    }
  }
</script>

<style scoped>
</style>
