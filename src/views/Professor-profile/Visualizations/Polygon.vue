<template>
    <svg id='polygon' xmlns="http://www.w3.org/2000/svg" class="polygon" :width="width" :height="height">
            <line x1="0" y1="0" x2="500" y2="500" stroke="black"/>
    </svg>
</template>

<script>
    export default {
        data() {
            return {
                width: 500,
                height: 500,
                stats: [1, 2, 3, 4, 5]
            }
        }
    }
</script>


<style scoped>
div {
    border: 2px solid red;
}

svg {
    background-color: black;
}
</style>
