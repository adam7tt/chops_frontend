<template>

  <div class = "home">

      <p>Welcome to Chops!</p>

      <div class="center">
        Type in the school, professor, or area of research to find Academics.
      </div>

      <searchbar/>

      <about/>

      <div class="placeholder"></div>

  </div>

</template>

<script>
import Searchbar from './Searchbar.vue'
import About from './About.vue'

export default {
  name: 'home',
  data(){
    return{
      search: null
    }
  },
  components: {
    searchbar: Searchbar,
    about: About
  }
}
</script>

<style scoped>

  p {
    text-align: center;
    font-size: 20px;
  }

  .placeholder {
    height : 500px;
    width : auto;
  }

</style>
