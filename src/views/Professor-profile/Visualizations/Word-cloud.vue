<template>
    <div class='word-cloud'>
      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"
      :wordClick="wordClickHandler" />
    </div>
</template>

<script>
import wordcloud from '@/views/Professor-profile/Visualizations/WordCloudpkg.vue'

export default {
    name: "word-cloud",
    data(){
        return{
             myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: [{
          "name": "Cat",
          "value": 26
        },
        {
          "name": "fish",
          "value": 19
        },
        {
          "name": "things",
          "value": 18
        },
        {
          "name": "look",
          "value": 16
        },
        {
          "name": "two",
          "value": 15
        },
        {
          "name": "fun",
          "value": 9
        },
        {
          "name": "know",
          "value": 9
        },
        {
          "name": "good",
          "value": 9
        },
        {
          "name": "play",
          "value": 6
        }
      ]
        }
    },
    components:{
        wordcloud
    },
    methods:{
        wordClickHandler(name, value, vm) {
    }
    }
}
</script>

<style scoped>
    .word-cloud{
        width: 50%;
        margin: 0 0;
        border: 2px solid grey;
    }
    .tooltip{
        display: none;
        position:relative !important;
    }
</style>