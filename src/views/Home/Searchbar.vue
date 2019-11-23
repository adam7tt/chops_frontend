<template>
  <div class="searchbar-p">
      <div class="searchbar">
        <input type="text" />
        <button @click="getResults">Search</button>
      </div>
  </div>
</template>

<script>

    import axios from 'axios'
    import { eventBus } from '../../main'

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
                eventBus.changeComponent('Results')
                // Send data to Results component
                eventBus.sendDataToResults(this.data)
            },
            getResults() {
                // hopefully we can keep it like this
                axios.get("http://127.0.0.1:8000/academics")
                .then(res => {
                    const data = res.data
                    const profs = []

                    for(let d in data)
                        profs.push(d)
                    
                    for(let p in profs)
                        console.log(p)
                    
                    console.log(profs)
                    this.data = profs
                    this.goToResults()
                })
                .catch(error => console.log(error))
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