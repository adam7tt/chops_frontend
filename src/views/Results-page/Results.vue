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
            <tr v-for="(person, index) in data" :key="index">
                <router-link :to="{ name: 'Profile', params: { id: person.id }}">
                    {{ person.name }}
                </router-link>
            </tr>
        </tbody>
      </table>
    </ul>
  </div>
</template>

<script>
import Searchbar from '../Home/Searchbar'
export default {
  data: function() {
    return {};
  },
  props: ["data"],
  components: {
    Searchbar,
  }
};
</script>

<style scoped>
.result {
  width: 70%;
}
</style>