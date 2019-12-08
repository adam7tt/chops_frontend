<template>
<<<<<<< HEAD
    <div class="visualization">
            <stat-gram
                :size='500'
                :stats='[1,1,1,1,1,1]'
                :max = '[5,5,5,5,5,5]'
                :num='5'/>
            <word-cloud style='flex-shrink: 1;'/>
           <!-- <timeline/> -->
    </div>
=======
    <div id="visualization">
        <div>
            <word-cloud/>
        </div>
        <div>
            <!-- <timeline/> -->
        </div>
    </div>   
>>>>>>> 4b0ebeaa4747c3cf451b4d9902f0d693ef5bd1cf
</template>

<script>
    import WordCloud from '@/views/Professor-profile/Visualizations/Word-cloud.vue';
<<<<<<< HEAD
    import Timeline from '@/views/Professor-profile/Visualizations/Timeline.vue';
    import StatGram from '@/views/Professor-profile/Visualizations/StatGram.vue';
=======
    //import Timeline from '@/views/Professor-profile/Visualizations/Timeline.vue';
>>>>>>> 4b0ebeaa4747c3cf451b4d9902f0d693ef5bd1cf

    export default {
        name: 'visualization',
        components:{
<<<<<<< HEAD
            WordCloud,
            Timeline,
            StatGram
=======
            WordCloud
           // Timeline
>>>>>>> 4b0ebeaa4747c3cf451b4d9902f0d693ef5bd1cf
        }
    }
</script>

<style scoped>

.visualization {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
}

</style>
