<template>
  <div class="searchbar-p">
      <div v-if="!viewAdv" class="searchbar">
        <input @keydown.enter="getResults" type="text" v-model="input"/>
        <button @click="getResults">Search</button>
        <button @click.prevent="viewAdvanced">Advanced Search</button>
      </div>
      <div v-if="viewAdv" class="row adv_search">
          <div class="row">
              <div class="col s12">
                <input id="name" v-model="dict.name" type="text"/>
                <label for="name">Professor Name</label>
              </div>
          </div>
          <div class="row">
              <div class="col s12">
                <input disabled value="To be added." v-model="keywords" type="text"/>
                <label for="keywords">Keywords (For multiple terms the form is ("Fruit Loops" "Health")</label>
              </div>
          </div>
          <div class="row">
              <div class="col s6">
                  <input v-model="dict.university_name" type="text"/>
                  <label for="Univeristy">University</label>
              </div>
              <div class="col s6">
                    <input v-model="dict.department_name" type="text"/>
                  <label for="department">Department</label>
              </div>
          </div>
        <button @click="getAdvResults">Search</button>
        <button @click="viewAdvanced">Simple</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            input: null,
            name: null,
            keywords: [],
            university: null,
            department: null,
            data : [],
            viewAdv: false,
            con_string: 'http://127.0.0.1:5000/academics/',
            dict : {
                name: null,
                keywords: [],
                university_name: null,
                department_name: null
            }
        }
    },
    methods: {
        getResults() {
            axios.get("http://127.0.0.1:5000/academics/?search=" + this.input)
            .then(res => {
                const data = res.data.results
                this.$router.push({ name: 'Results', params: {data: data} })
            })
        },
        getAdvResults(){
            for (const property in this.dict) {
                if(this.dict[property] != null && this.con_string.slice(-1) != '/'){
                    this.con_string += '&?' + property + '=' + this.dict[property];
                }else if(this.dict[property] != null){
                    this.con_string += '?' + property + '=' + this.dict[property];
                }
            }
            axios.get(this.con_string)
            .then(res => {
                const data = res.data.results
                this.$router.push({ name: 'Results', params: {data: data} })
            })
        },
        viewAdvanced(){
            this.viewAdv = !this.viewAdv
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
    }

    button {
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        width: 100px;
    }
    .adv_search{
        width: 75%;
    }
</style>
