<template>
    <div class="content">
        {{ data }}
        Hello
        <result
            class="result center"
            v-for="d in 5"
            :key="d"
            :d="d">
        </result>
    </div>
</template>

<script>

    // import { eventBus } from '../../main'
    import Result from './Result.vue'
    import { store } from '../../store/store'

    export default {

        data() {
            return {
            }
        },
        props: ['data'],
        components: {
        },
        methods:{

        },
        computed : {            

            
        },
        mounted() {

        },
        beforeCreate(){

        },
        created() {
            // console.log("this ran")
            // console.log(this.data)
            // eventBus.$on('dataWasSentToResults', (data) => {
            //     console.log("inside",data),
            //     this.data = data
            // })
            // console.log("check this out", this.data)
        }
        
    }
</script>

<style scoped>

    /* .content {
        width: 70%;
    } */

    .result {
        width: 70%;
    }
</style>