<template>
  <div class="container citation my-5">
    <div class='row'>
      <div class='col'></div>
      <div class='col'><img style='max-width:200px;' src='../assets/samplewordcloud.png'></div>
    </div>
    <table class='table my-5'>
      <thead>
        <tr><td>Collaborators</td><td>Title</td><td>Date</td></tr>
      </thead>
      <tbody>
        <tr v-for="data in info" :key="data.id">
        <td>{{data.collaborators}}</td><td>{{data.title}}</td><td>{{data.date}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
      axios.get('http://django-env.zectunjjvb.us-west-2.elasticbeanstalk.com/citations/')
        .then(response => (
          this.info = response.data
          ))
        .catch(error => (this.info = error))
  }
}
</script>
