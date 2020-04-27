<template>
  <div>
    <div class="design">
      <h1>{{title}}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title","text"]
};
</script>

<style scoped>
h1{
 font-size: 2em;   
}
.design {
  width: 500px;
  height: 1500px;
  font-family: Helvetica, Arial, sans-serif;
  margin: 0px auto;
  margin-bottom: 50px;
}
</style>