<template>
    <div class="main">
        <h4>Citations</h4>
        <table class="highlight">
        <thead>
          <tr>
              <th></th>
              <th>#</th>
              <th>Title</th>
              <th>URL</th>
              <th>Date Published</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(citation, index) in citations" :key="index" @click="toggleSelect(index)"
              v-bind:class="{'citation-selected':citation.selected}">
            <td><input type="checkbox" v-model="citation.selected" ></td>
            <td>{{ index + 1 }}</td>
            <td>{{ citation.title }}</td>
            <td><a :href="citation.url" target="_blank"><i class="material-icons">open_in_new</i><!--{{citation.url.slice(0,-10)}}--></a></td>
            <td>{{ citation.date_published.slice(0,10) }}</td>
          </tr>     
        </tbody>
      </table>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import axios from 'axios'

export default {
  data() {
    return{
      citations: [],
    }
  },
  mounted(){
        axios.get('http://127.0.0.1:5000/citations/?academic_id=' + this.id)
          .then(response => {
            this.citations = response.data.results.map((obj) => {
              obj.selected = false;
              return obj;
            });
          })
          .catch(error => (this.citations = error))
  },
  props: ['id', 'activeCitations'],
  methods: {
    toggleSelect(index){
      this.citations[index].selected = !this.citations[index].selected;
      
      this.activeCitations = this.citations.map((citation) =>{
        if (citation.selected)
          return citation.id;
      }).filter((citation) =>{
        return citation != undefined;
      });

      this.$emit('input', this.activeCitations);
      //console.log("toggle", index);
      //TODO update activeCitations
      }
  }
}
</script>
<style scoped>
    .main{
        display:flex;
        flex-direction: column;

    }

    .citation-selected{
      background-color: #fff2ac;
      background-image: linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
    }
</style>
