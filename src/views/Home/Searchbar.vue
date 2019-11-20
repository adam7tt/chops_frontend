<template>
  <div class="searchbar-p">
      <div class="searchbar">
        <input type="text" />
        <button @click="goToResults">Search</button>
      </div>
  </div>
</template>

<script>

    import { eventBus} from '../../main'

    export default {
        methods: {
            goToResults() {
                eventBus.changeComponent('Results')
            }
        }
    };
</script>


<style scoped>

    .searchbar-p {
        padding: 10px 5px 5px 5px;
        text-align: center;

    }

    .searchbar {
        width: 50%;
        display: inline-flex;
        padding: 5px;
        /* border: solid 2px black; */
    }

    button {
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        width: 100px;
    }

</style>