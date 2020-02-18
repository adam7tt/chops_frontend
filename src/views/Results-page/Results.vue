<template>
  <div class="container">
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
            <Result 
              v-for="person in data"
              :key="person" :person="person">   
            </Result>
        </tbody>
      </table>
    </ul>
  </div>
</template>

<script>
import Result from './Result'
export default {
  data() {
    return {

    };
  },
  props: ["data"],
  components: {
    Result
  },
};
</script>

<style scoped>
.result {
  width: 70%;
}
</style>