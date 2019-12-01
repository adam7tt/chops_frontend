<template>
    <div>
        <h4>Professor {{ info[0].name}} </h4>
        <div>
            <label class="field-name">
                School:
            </label>
            <label class="field-value">
                {{info[0].university}}
            </label>
            <br/>
            <label class="field-name">
                Department:
            </label>
            <label class="field-value">
                {{info[0].department}}
            </label>
            <br/>
            <label class="field-name">
                Number of Citatons:
            </label>
            <label class="field-value">
                {{info[0].citations.length}}
            </label>
        </div>
        <p>{{info}}</p>
    </div>
</template>

<script>
    export default {
       data(){
           return{
           }
       },
       props: ['info']
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