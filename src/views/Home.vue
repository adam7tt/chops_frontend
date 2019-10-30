<template>
  <div>
    <div class="home">
      <div class="md-layout md-gutter">
        <div class="md-layout-item dropdown ">
          <md-field>
            <label for="movie">Sort By</label>
            <md-select v-model="movie" name="movie" id="movie">
              <md-option value="professor">Professor Name</md-option>
              <md-option value="school">School</md-option>
              <md-option value="area">Area of Interest</md-option>
              <md-option value="area">Key Word</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
      <div>
        <md-field class="search">
          <label>Search Here</label>
          <md-input v-model="search"></md-input>
        </md-field>
      </div>
      <div>
        <md-button class="md-raised md-primary search-btn">Search</md-button>
      </div>
    </div>
    <div class="about">
      <div class="container my-5 about">
        Cutting edge technology leveraing machine learning, neural networks two infer a professors skillset based off of their research.
        <br>
        Chops also provides stunning visualizations that will help you understand if you interested matches well with a given scholar.
        <br>
        Chops also gives you the ablity to build teams according to the solution you are trying to find.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      movie: "school",
      search: null
    }
  }
}

</script>

<style>
  .home{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
  }

  .dropdown{
    background-color: white;
  }

  .search{
    margin-left:5% !important;
  }

  .search-btn{
    margin-left:15% !important;
  }
</style>
