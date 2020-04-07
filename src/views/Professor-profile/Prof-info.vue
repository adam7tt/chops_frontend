<template>
<div class="row profile_top">
    <div class="col s2">
        <img class="responsive-img prof_image" src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="">
    </div>
    <div v-if="info" class="col s2 profinfo">
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

.profile_top{
    padding-top: 10px;
}
.prof_image{
    margin-top: 20px;
}
</style>
