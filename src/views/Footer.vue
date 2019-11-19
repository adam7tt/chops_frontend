<template>
        <div id="footer" class="light-blue">
            <div class="container">
                  <router-link :to="{ name: 'home'}" class="brand-logo center">Chops</router-link>
                  <span class="span">&copy;</span>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
/* 
  .footer{
    height: 1;
  } */

  .container{
    color: white;
    text-align: center;
  }

</style>