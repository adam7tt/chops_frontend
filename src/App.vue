<template>
  <div id="app">
    <md-toolbar class="header" md-elevation="1">
        <div class="header-left">
          <img alt="Vue logo" class="logo" src="./assets/ChopsLogo.png">
        </div>
        <div class="menu">
          <md-button>
            <router-link to="/home" class="nav-link header-item">
              <md-icon class="md-size-1x">home</md-icon>
              Home
            </router-link>
          </md-button>
          <md-button><router-link to="/about" class="nav-link header-item">About</router-link></md-button>
          <md-button><router-link to="/citation" class="nav-link header-item">Citations</router-link></md-button>
        </div>
        <div class="login-btn">
          <md-button class="header-item" @click="showDialog = true">Login</md-button>
        </div>
    </md-toolbar>
    <div class="main-content">
      <router-view/>
    </div>
    <div id="footer">
      Chops!
    </div>
    <!-- <div> -->
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
    <!-- </div> -->
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
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  height: 100% !important;
}

#footer{
  display:flex;
  justify-content: flex-end;
  padding: 2% 2%;
}

.login{
  background-color: white;
}

.login-btn{
  display:flex;
  justify-content: flex-end;
  color: white;
}

.inputs{
  margin: 0 5%;
}

.actions{
  margin-bottom: 5%;
}

.logo{
  max-height: 15% !important;
}

.header{
  background-image: linear-gradient(grey, rgba(0, 0, 124, 0.5));
  max-height: 20%;
  margin: 0 0 !important;
  width: 100%;
  padding: 2% 2%; 
  display:flex;
  justify-content: space-between;
  flex-direction: row;
}

.header-left{
  max-width: 10%;
  height: 70%;
}

.main-content{
  height: 80%;
  text-align: center;
}

.row{
  display: flex;
  flex-direction: row;
}

.menu{
  display: flex;
  justify-content: center;
}

.header-item { 
  text-decoration: none !important;
  color: black !important;
}
</style>
