<!-- <template>
    <div class='word-cloud'>
      <wordcloud
      :data="defaultWords"
      nameKey="text"
      valueKey="value"
      :color="myColors"
      :showTooltip="true"

      />
    </div>

    <!-- :wordClick="wordClickHandler"
</template>
-->
<template>
    <cloud :data="words" :fontSizeMapper="fontSizeMapper"/>
</template>

<script>
// import wordcloud from '@/views/Professor-profile/Visualizations/WordCloudpkg.vue'
import Cloud from 'vue-d3-cloud'

export default {
    name: "word-cloud",
    data(){
        // console.log(this.info)
        return{
            words: this.info[0].wordcloud,
            fontSizeMapper: word => Math.log2(word.value) * 10
            // myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
            // defaultWords: this.info[0].wordcloud
        }
    },
    props: ['info'],
    components:{
        Cloud
        // wordcloud
    },
    // methods:{
    //     wordClickHandler(name, value, vm) {
    //     }
    // }
}
</script>

<style scoped>
/*
    .wordCloud svg g {
        transform: translate(250px,150px);
    }
*/
    .wordCloud{
        /* width: 50%; */
        /* margin: 0 0; */
        /* border-style: solid; */
        /* border-width: 2px; */
        /* border-color: grey; */
    }
    .word-cloud{
        /* flex-shrink: 1; */
        /* border: 2px solid grey; */
    }
</style>
