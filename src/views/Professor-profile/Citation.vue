<template>
    <div class="main">
        <h4>Citations</h4>
        <table class="highlight">
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Natan</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Jorge</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Roee</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
      {{id}}
      {{info[0]}}
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
