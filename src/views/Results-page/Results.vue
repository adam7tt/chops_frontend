<template>
    <div>
        <ul>
            <li v-for="(person, index) in data" :key="index">
                <router-link :to="{ name: 'Result', params: { person: person }}">
                    {{ person }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
            }
        },
        props: ['data'],
        components: {
        },
    }
</script>

<style scoped>
    .result {
        width: 70%;
    }
</style>