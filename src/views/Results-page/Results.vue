<template>
  <div class="container">
    <ul>
      <h4>Citations</h4>
      <table class="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>University</th>
          </tr>
        </thead>

        <tbody>
          <!-- <tr v-for="(person, index) in data" :key="index"> -->

              <!-- {{data}} -->



                <Result 
                v-for="person in data" 
                :key="person" 
                :bind="person"
                :person="person">  
                
                            <router-link :to="{ name: 'Result', params: { person: person }}"></router-link>

                </Result>
                

          <!-- </tr> -->
        </tbody>
      </table>
    </ul>
  </div>
</template>

<script>
import Result from './Result'
export default {
  data: function() {
    return {};
  },
  props: ["data"],
  components: {
      Result
  }
};
</script>

<style scoped>
.result {
  width: 70%;
}
</style>