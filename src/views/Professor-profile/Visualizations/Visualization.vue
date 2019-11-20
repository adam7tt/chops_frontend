<template>
    <div id="visualization">
        <div>
            <word-cloud/>
        </div>
        <div>
            <timeline/>
        </div>
    </div>   
</template>

<script>
    import WordCloud from '@/views/Professor-profile/Visualizations/Word-cloud.vue';
    import Timeline from '@/views/Professor-profile/Visualizations/Timeline.vue';

    export default {
        name: 'visualization',
        components:{
            WordCloud,
            Timeline
        }
    }
</script>
