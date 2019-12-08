<template>
    <div class="main">
        <h4>Citations</h4>
        <table class="highlight">
        <thead>
          <tr>
              <th>#</th>
              <th>Title</th>
              <th>URL</th>
              <th>Date Published</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(citation, index) in info" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ citation.title }}</td>
            <td><a :href="citation.url"><i class="material-icons">publish</i><!--{{citation.url.slice(0,-10)}}--></a></td>
            <td>{{ citation.date_published.slice(0,10) }}</td>
          </tr>     
        </tbody>
      </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
      info: null,
    }
  },
  mounted(){
        axios.get('http://127.0.0.1:8000/citations/?academic_id=' + this.id)
          .then(response => (
            this.info = response.data.results
            ))
          .catch(error => (this.info = error))
  },
  props: ['id'],
}
</script>
<style scoped>
    .main{
        display:flex;
        flex-direction: column;

    }
</style>
