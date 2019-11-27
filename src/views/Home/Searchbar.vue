<template>
  <div class="searchbar-p">
      <div class="searchbar">
        <input type="text" v-model="input"/>
        <button @click="getResults">Search</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            input: null,
            data : []
        }
    },
    methods: {
        getResults() {
            axios.get("http://127.0.0.1:8000/academics")
            .then(res => {
                const data = res.data
                const profs = []
                for(let d in data)
                    profs.push(d)
                                    
                this.data = profs
                this.$router.push({ name: 'Results', params: {data: data} })
            })
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