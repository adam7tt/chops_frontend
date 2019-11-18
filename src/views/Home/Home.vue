<template>

  <div>
      <searchbar></searchbar>
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



</style>
