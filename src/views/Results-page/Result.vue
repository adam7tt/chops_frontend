<template>
    <div>
        <div
            style="cursor: pointer"
            @click="goToProfile">
            <p>This is a test</p>
            <!-- <p>{{ d }}</p> -->
        </div>
    </div>
</template>

<script>

    // import { eventBus } from '../../main';

    export default {
        methods:{
            goToProfile() {
                // eventBus.changeComponent('Profile')
            }
        }
    }
</script>

<style scoped>
    p {
        border: 2px solid black; 
    }
</style>