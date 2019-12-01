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
        return{
            words:[
                { text: 'Vue', value: 1000 },
                { text: 'js', value: 200 },
                { text: 'Jorge', value: 8000 },
                { text: 'very cool', value: 1000000 },
                { text: 'lunch', value: 100 },
            ],
            fontSizeMapper: word => Math.log2(word.value) * 2
        }
    },
    components:{
        Cloud
    }
}
</script>

<style>
    g {
        transform: translate(250px,150px);
    }

    .wordCloud{
        width: 50%;
        margin: 0 0;
        border-style: solid;
        border-width: 2px;
        border-color: grey;
    }
</style>