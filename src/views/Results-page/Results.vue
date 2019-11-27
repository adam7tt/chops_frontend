<template>
<<<<<<< Updated upstream
    <div>
        <ul>
            <li v-for="(person, index) in data" :key="index">
                <router-link :to="{ name: 'Result', params: { person: person }}">
                    {{ person }}
                </router-link>
            </li>
        </ul>
=======
    <div class="content">
        {{ data }}
        Hello
        <result
            class="result center"
            v-for="d in 5"
            :key="d"
            :d="d">
        </result>
>>>>>>> Stashed changes
    </div>
</template>

<script>
<<<<<<< Updated upstream
    export default {
        data: function() {
=======

    // import { eventBus } from '../../main'
    import Result from './Result.vue'
    import { store } from '../../store/store'

    export default {

        data() {
>>>>>>> Stashed changes
            return {
            }
        },
        props: ['data'],
        components: {
        },
<<<<<<< Updated upstream
=======
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
        
>>>>>>> Stashed changes
    }
</script>

<style scoped>
<<<<<<< Updated upstream
=======

    /* .content {
        width: 70%;
    } */

>>>>>>> Stashed changes
    .result {
        width: 70%;
    }
</style>