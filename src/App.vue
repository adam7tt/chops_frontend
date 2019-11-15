<template>
  <div id="app">
    <Navbar/>
    <div class="main-content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue'
import Footer from '@/views/Footer.vue'

  export default {
    name: 'Login',
    data: () => ({
      
    }),
    components: {
      Navbar,
      Footer,
    }
  }
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  height: 100% !important;
}

#footer{
  display:flex;
  justify-content: flex-end;
  padding: 2% 2%;
}

.login{
  background-color: white;
}

.login-btn{
  display:flex;
  justify-content: flex-end;
  color: white;
}

.inputs{
  margin: 0 5%;
}

.actions{
  margin-bottom: 5%;
}

.logo{
  max-height: 15% !important;
}

.header{
  background-image: linear-gradient(grey, rgba(0, 0, 124, 0.5));
  max-height: 20%;
  margin: 0 0 !important;
  width: 100%;
  padding: 2% 2%; 
  display:flex;
  justify-content: space-between;
  flex-direction: row;
}

.header-left{
  max-width: 10%;
  height: 70%;
}

.main-content{
  height: 80%;
  text-align: center;
}

.row{
  display: flex;
  flex-direction: row;
}

.menu{
  display: flex;
  justify-content: center;
}

.header-item { 
  text-decoration: none !important;
  color: black !important;
}
</style>
