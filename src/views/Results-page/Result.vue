<template>
    <div>
        <p>{{ person}}</p>
    </div>
</template>

<script>
    export default {
        methods:{
        },
    props: ['person']
    }
</script>

<style scoped>
    p {
        border: 2px solid black; 
    }
</style>