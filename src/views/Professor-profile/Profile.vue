<template>
  <div class="profile">
    <div class="profile__top">
        <ProfInfo :info="info"/>
        <Visualization :data="data"/>
    </div>
    <Citation class="profile__citation" v-if="info" :id="info.id"/>
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
        info: null,
        data: null
      }
    },
    components:{
        ProfInfo,
        Visualization,
        Citation
    },
    props: ['id'],
    mounted () {
        axios.get('http://127.0.0.1:5000/academics/?id=' + this.id)
          .then(response => {
            this.info = response.data
          })
          .catch(error => (this.info = error))

        axios.get('http://127.0.0.1:5000/academics/wordcloud/?id=' + this.id)
          .then(response => {
            this.data = JSON.parse(response.data.result)
          })
          .catch(error => (this.data = error))
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
