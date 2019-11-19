<template>
    <div>
        <h4>Professor Name</h4>
        <div class="info">
            <div class="item" v-for="(item, index) in profInfo" :key="index">
                <label class="info-field">{{ index }}</label>: {{ item }}
            </div>
        </div>

    </div>
</template>

<script>

    export default {
       data(){
           return{
               profInfo : {
                   'School': "CSUN",
                   'Department': 'Computer Science',
                   'Area of Interest': 'Artificial Inteligence',
                   'number of citations': 20,
                   'Most Recent' : '01-01-2019'
               }
           }
       } 
    }
</script>

<style scoped>
    .info{
        display:flex;
        flex-wrap: wrap;
    }

    .item{
        display:flex;
        flex-wrap: wrap;
        width: 50%;
    }

    .info-field{
        font-weight: bold;
        color: black;
        font-size: 14px;
    }
</style>