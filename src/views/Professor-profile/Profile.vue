<template>
  <div class="container">
    <div class="profile">
          <ProfInfo :info="info"/>
          <Visualization v-if="data" :data="data"/>
      <Citation class="profile__citation" v-model="activeCitations" v-if="info" :id="info.id"/>
      <!-- <p>{{ new_array }} </p> -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ProfInfo from '@/views/Professor-profile/Prof-info.vue';
  import Visualization from '@/views/Professor-profile/Visualizations/Visualization.vue';
  import Citation from '@/views/Professor-profile/Citation.vue';

  export default {
    name: 'profile',
    data(){
      return{
        info: null,
        data: null,
        dates: null,
        activeCitations: null,
      }
    },
    components:{
        ProfInfo,
        Visualization,
        Citation
    },
    props: ['id'],
    methods:{

    },
    mounted () {
        axios.get('http://127.0.0.1:5000/academics/?id=' + this.id)
          .then(response => {
            this.info = response.data
            this.activeCitations = [];
          })
          .catch(error => (this.info = error))

        axios.get('http://127.0.0.1:5000/citations/?academic_id=' + this.id)
          .then(response => (
            this.dates = response.data.results
            ))
          .catch(error => (this.dates = error))
    },
    watch: {
    activeCitations: function (val) {
      // axios call here that populates this.data
        var ids = this.activeCitations.length == 0 ? this.info.citations.toString() : val.toString();
        ids = ids.replace(/(^,)|(,$)/g, "");
        
        axios.get('http://127.0.0.1:5000/citations/wordcloud/?ids=' + ids)
          .then(response => {
            this.data = JSON.parse(response.data.result)
          })
          .catch(error => (this.data = error))
      }
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
