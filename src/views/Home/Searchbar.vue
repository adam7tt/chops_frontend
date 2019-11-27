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

    import axios from 'axios'
    import { store } from '../../store/store'
    // import { eventBus } from '../../main'

    export default {
        data() {
            return {
                data : []
            }
        },
        methods: {
            // maybe I want to change the component and send the data to results?
            goToResults() {
                // Activate the Results component
                this.$store.activeComponent = 'Results';
                this.$store.resultsData = this.data;
                // Send data to Results component
                // console.log("Right before data is sent to results")
                // eventBus.sendDataToResults(this.data)
            },
            getResults() {
                // hopefully we can keep it like this
                axios.get("http://127.0.0.1:8000/academics")
                .then(res => {

                    // const t = res.data;
                    const profs = [];
                    for (let i = 0; i < res.data.length; i++){
                        profs.push(res.data[i]);
                    }

                    for(let i = 0; i < profs.length; i++)
                        console.log(profs[i])
                    
                    this.data = profs
                    // // console.log(this.data)
                    // console.log("Right before goToResults runs")
                    this.goToResults()
                })
                .catch(error => console.log(error))
            }
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