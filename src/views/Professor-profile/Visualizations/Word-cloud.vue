<template>
    <div id="visualization">
        <cloud :data="words" :fontSizeMapper="fontSizeMapper"/>
    </div>
</template>

<script>
import Cloud from 'vue-d3-cloud'

export default {
    name: "word-cloud",
    data(){
        // console.log(this.info)
        return{
            words: this.info[0].wordcloud,
            fontSizeMapper: word => Math.log2(word.value) * 10
        }
    },
    props: ['info'],
    components:{
        Cloud
    },
    created(){
        // console.log("info", this.info);
    }
}
</script>

<style scoped>
    .wordCloud svg g {
        transform: translate(250px,150px);
    }

    .wordCloud{
        /* width: 50%; */
        margin: 0 0;
        /* border-style: solid; */
        /* border-width: 2px; */
        /* border-color: grey; */
    }
</style>
