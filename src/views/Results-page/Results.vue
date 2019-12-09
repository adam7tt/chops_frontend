<template>
  <div class="container">
    <Searchbar/>
    <ul>
      <h5>Results by Professors</h5>
      <table class="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>

            <!-- Result -->

            <Result 
              v-for="person in data"
              :key="person" :person="person">

                
            
            </Result>
            
            <tr  >

            </tr>
        </tbody>
      </table>
    </ul>
  </div>
</template>

<script>
import Searchbar from '../Home/Searchbar'
import Result from './Result'
export default {
  data() {
    return {

    };
  },
  props: ["data"],
  components: {
    Searchbar,
    Result
  },
  // created(){
  //   console.log(this.data)
  // }
};
</script>

<style scoped>
.result {
  width: 70%;
}
</style>