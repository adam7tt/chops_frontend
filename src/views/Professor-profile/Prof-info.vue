<template>
    <!-- BEM CSS convention https://css-tricks.com/bem-101/ -->
    <div v-if="info" class="profinfo">
        <h4 class="profinfo__name">Professor {{ info.name }} </h4>
        <div class="profinfo__data">
            <label class="profinfo__data__fname">
                School:
            </label>
            <label class="profinfo__data__fvalue">
                {{info.university}}
            </label>
            <br/>
            <label class="profinfo__data__fname">
                Department:
            </label>
            <label class="profinfo__data__fvalue">
                {{info.department}}
            </label>
            <br/>
            <label class="profinfo__data__fname">
                Number of Citatons:
            </label>
            <label class="profinfo__data__fvalue">
                {{info.citations.length}}
            </label>
        </div>
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

<style lang="scss" scoped>
.profinfo {
    &__name {
    }

    &__data {

        font-size: 12px;
        color: black;

        &__fname{
            font-weight: bold;
            color: inherit;
        }

        &__fvalue{
            padding-left: 0.25rem;
            color: inherit;
        }
    }

}
</style>
