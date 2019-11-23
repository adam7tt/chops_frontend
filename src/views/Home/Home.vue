<template>

  <div class = "home">

      <h4 class="center">Welcome to Chops!</h4>

      <div class="center">
        Type in the school, professor, or area of research to find academic researchers.
      </div>

      <searchbar/>

      <about/>

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
    height : 600px;
    width : auto;
  }

</style>
