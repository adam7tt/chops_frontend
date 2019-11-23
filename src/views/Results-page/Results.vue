<template>
    <div>
        {{ data }}
        <!-- <result
            class="result center"
            v-for="d in 5"
            :key="d"
            :i="d">
        </result> -->
    </div>
</template>

<script>

    import { eventBus } from '../../main'
    import Result from './Result.vue'

    export default {

        data: function() {
            return {
                data : []
            }
        },
        components: {
            result : Result
        },
        created() {
            eventBus.$on('dataWasSentToResults', (data) => {
                console.log("This ran");
                this.data = data;
                console.log(data);
            });
        }
        
    }
</script>

<style scoped>

    .result {
        width: 70%;
    }

</style>