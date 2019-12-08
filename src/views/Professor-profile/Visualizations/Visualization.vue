<template>
    <div class="visualization">
            <stat-gram
                :size='500'
                :stats='[1,1,1,1,1,1]'
                :max = '[5,5,5,5,5,5]'
                :num='5'/>
            <word-cloud style='flex-shrink: 1;'/>
           <!-- <timeline/> -->
    </div>
</template>

<script>
    import WordCloud from '@/views/Professor-profile/Visualizations/Word-cloud.vue';
    import Timeline from '@/views/Professor-profile/Visualizations/Timeline.vue';
    import StatGram from '@/views/Professor-profile/Visualizations/StatGram.vue';

    export default {
        name: 'visualization',
        components:{
            WordCloud,
            Timeline,
            StatGram
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
