<template>

  <div>
      <searchbar></searchbar>

      <div class="placeholder"></div>
  </div>

</template>

<script>
import Searchbar from './Searchbar.vue'

export default {
  name: 'home',
  data(){
    return{
      search: null
    }
  },
  components: {
    searchbar: Searchbar
  }
}
</script>

<style scoped>

  .placeholder{
    height : 650px;
    width : auto;
  }

</style>
