<template>
    <div>
        <div class="row">
            <div class="col s4">
            <stat-gram class="visualization__statgram"
                :stats='[3,4,4,4,3,5]'
                :max = '[5,5,5,5,5,5]'
                :num='6'/>
            </div>
            <div class="col s8">
                <ve-line :data="chartData"></ve-line>
            </div>
        </div>
        <div class="row">
            <div class="col s4">
            <word-cloud class="visualization__wordcloud"
                :data="data"/>
            </div>
        </div>
    </div>
</template>

<script>
    import WordCloud from '@/views/Professor-profile/Visualizations/Word-cloud.vue';
    import StatGram from '@/views/Professor-profile/Visualizations/StatGram.vue';
    import VeLine from 'v-charts/lib/line.common';

    export default {
        name: 'visualization',
        props: ['info', 'data',],
        components:{
            WordCloud,
            StatGram,
            VeLine 
        },
        data: function(){
            return{
                chartData: {
                    columns: ['date', 'count'],
                    rows: [
                    { 'date': '1992', 'count': 4},
                    { 'date': '1996', 'count': 1},
                    { 'date': '2002', 'count': 3},
                    { 'date': '2007', 'count': 2},
                    { 'date': '2009', 'count': 7},
                    { 'date': '2012', 'count': 3},
                    ]
            }
        }
    },
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
