<template>
  <div id="profile">
    <div class="row">
        <div id="info" class="col s2"><ProfInfo/></div>
        <div id="visualization" class="col s10"><Visualization/></div>
        <div id="citation" class="col s12"><Citation/></div>
    </div>
  </div>
</template>

<script>
import ProfInfo from '@/views/Professor-profile/Prof-info.vue';
import Visualization from '@/views/Professor-profile/Visualizations/Visualization.vue';
import Citation from '@/views/Professor-profile/Citation.vue';

  export default {
    name: 'profile',
    components:{
        ProfInfo,
        Visualization,
        Citation
    }
  }
</script>

<style scoped>
    #citation{
        padding-top: 5%;
    }
</style>