<template>
  <div id="profile">
    <div class="row"> <!-- {{ info}} -->
        <div id="info" class="col s2"><ProfInfo :info="info"/></div>
        <div id="visualization" class="col s10"><Visualization/></div>
        <div id="citation" class="col s12"><Citation :id="info[0].id"/></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import ProfInfo from '@/views/Professor-profile/Prof-info.vue';
import Visualization from '@/views/Professor-profile/Visualizations/Visualization.vue';
import Citation from '@/views/Professor-profile/Citation.vue';

  export default {
    name: 'profile',
    data(){
      return{
        info: null
      }
    },
    components:{
        ProfInfo,
        Visualization,
        Citation
    },
    props: ['id'],
    mounted () {
        axios.get('http://127.0.0.1:8000/academics/?id=' + this.id)
          .then(response => (
            this.info = response.data.results
            ))
          .catch(error => (this.info = error))
    }
  }

</script>

<style scoped>
    #citation{
        padding-top: 5%;
    }
</style>
