<template>
    <div>
        <md-toolbar class="header" md-elevation="1">
            <div class="header-left">
                <img alt="Chops logo" class="logo" src="@/assets/ChopsLogo.png">
            </div>
            <div class="menu">
                <md-button>
                <router-link to="/home" class="nav-link header-item">
                    <md-icon class="md-size-1x">home</md-icon>
                    Home
                </router-link>
                </md-button>
                <md-button>
                <router-link to="/about" class="nav-link header-item">
                <img alt="Vue logo" src="@/assets/baseline_person_black_18dp.png">
                    About
                </router-link>
                </md-button>
                <md-button><router-link to="/citation" class="nav-link header-item">Citations</router-link></md-button>
            </div>
            <div class="login-btn">
                <md-button class="header-item" @click="showDialog = true">Login</md-button>
            </div>
        </md-toolbar>
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
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
      showDialog: false,
      value: null,
      username: null,
      password: null
    })
}
</script>

<style scoped>
</style>