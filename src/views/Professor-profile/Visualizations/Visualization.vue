<template>
    <div class="visualization">
            <stat-gram class="visualization__statgram"
                :stats='[1,1,1,1,1,1]'
                :max = '[5,5,5,5,5,5]'
                :num='6'/>
            <word-cloud class="visualization__wordcloud"
                v-if="info"
                :info="info"/>
           <!-- <timeline/> -->
    </div>
</template>

<script>
    import WordCloud from '@/views/Professor-profile/Visualizations/Word-cloud.vue';
    import StatGram from '@/views/Professor-profile/Visualizations/StatGram.vue';

    export default {
        name: 'visualization',
        props: ['info'],
        components:{
            WordCloud,
            StatGram
        }
    }
</script>

<style lang="scss" scoped>

.visualization {
    display: inline-flex;
    padding: 0.75rem;
    justify-content: space-between;

    &__statgram {
        flex: 1 1;
    }

    &__wordcloud {
        flex: 1 1;
        width: 10%;
    }
}

</style>
