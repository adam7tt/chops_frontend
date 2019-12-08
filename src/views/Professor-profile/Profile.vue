<template>
<<<<<<< HEAD
  <div class="profile">
    <div class="profile__top"> <!-- {{ info}} -->
        <ProfInfo :info="info"/>
        <Visualization/>
=======
  <div id="profile">
    <div class="row">
        <div id="info" class="col s2"><ProfInfo :info="info"/></div>
        <div id="visualization" class="col s10"><Visualization/></div>
        <div id="citation" v-if="info" class="col s12"><Citation :id="info[0].id"/></div>
>>>>>>> 4b0ebeaa4747c3cf451b4d9902f0d693ef5bd1cf
    </div>
    <div id="citation" ><Citation :id="info[0].id"/></div>
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
          .then(response => {
            this.info = response.data.results;
          })
          .catch(error => (this.info = error))
    }
  }

</script>

<style lang="scss" scoped>
.profile {
    &__top {
        display: flex;
        flex-direction: row;
        padding: 0 0.75rem;
    }

    &__citation {
        padding-top: 5%;
        display: flex;
        flex-direction: column;
    }
}
</style>
