<template>
  <div id="app">
    <Navbar/>
    <main>
      <router-view/>
    </main>
    <Footer/>
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
    },
    created() {
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
