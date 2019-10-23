<template>
  <div id="app" class='container' style=''>

    <div id="nav" class="">
      <div class="row">
        <div class='col'>
          <img alt="Vue logo" src="assets/logo.png">

          <!-- <img alt="Chops logo" src="ChopsLogo.png"> -->
        </div>
        <div class='col'>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <md-button><router-link to="/home" class="nav-link">Home</router-link></md-button>
            </li>
            <li class="nav-item">
              <md-button><router-link to="/about" class="nav-link">About</router-link></md-button>
            </li>
            <li class="nav-item">
              <md-button><router-link to="/citation" class="nav-link">Citations</router-link></md-button>
            </li>
            <li class="nav-item">
              <md-button class="nav-link" @click="showDialog = true">Login</md-button>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <router-view/>
    <div>
      <md-dialog class="login" :md-active.sync="showDialog">
      <md-dialog-title>Login</md-dialog-title>
      <div class="inputs"> 
        <md-field>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-field>
        <md-field>
          <label>Password</label>
          <md-input v-model="password"></md-input>
        </md-field>
      </div>
      <md-dialog-actions class="actions">
        <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="showDialog = false">Login</md-button>
      </md-dialog-actions>
    </md-dialog>
    </div>
  </div>
  
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      showDialog: false,
      value: null,
      username: null,
      password: null
    })
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.login{
  background-color: white;
}

.inputs{
  margin: 0 5%;
}

.actions{
  margin-bottom: 5%;
}
</style>
