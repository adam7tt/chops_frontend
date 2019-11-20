<template>
    <div>
        <h4>Professor Name</h4>
        <div v-for="(item, index) in profInfo" :key="index">
            <label class="field-name">{{ index }}:</label>
            <label class="field-value"> {{ item }} </label>
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
    
    .field-name{
        font-weight: bold;
        color: black;
        font-size: 12px;
    }

    .field-value{
        font-size: 12px;
        padding-left: 1%;
        color: black;
    }
</style>