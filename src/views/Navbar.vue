<template>
    <!-- <div>
        <md-toolbar class="header" md-elevation="1">
            <div class="header-left">
                <router-link :to="{ name: 'home'}">
                    <img alt="Chops logo" class="logo" src="@/assets/chops.png">
                </router-link>
            </div>
            <div class="menu">
                <md-button>
                <router-link to="/" class="nav-link header-item">
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
        </md-toolbar>     -->
        <!-- <md-dialog class="login" :md-active.sync="showDialog">
            <md-dialog-title>Login</md-dialog-title>
            <div class="inputs"> 
                <md-field>
                <label for="email">Email</label>
                <md-input v-model="username"></md-input>
                </md-field>
                <md-field>
                <label for="password">Password</label>
                <md-input v-model="password"></md-input>
                </md-field>
            </div>
            <md-dialog-actions class="actions">
            <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
            <md-button class="md-primary" @click="showDialog = false">Login</md-button>
            </md-dialog-actions>
        </md-dialog> -->
    <!-- </div> -->

    <div class="navbar">
        <nav class="light-blue">
        <div class="container">
            <router-link :to="{ name: 'home'}" class="brand-logo left">Chops</router-link>
            <ul class="right">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/citation">Citations</router-link></li>
            <li v-if="!user"><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
            <li v-if="!user"><router-link :to="{ name: 'Login'}">Login</router-link></li>
            <li v-if="user"><a>{{ user.email }}</a></li>
            <li v-if="user"><a @click="logout">Logout</a></li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Navbar',
    data (){
        return{
            user: null,
        }
    },
    methods: {
        logout(){
        firebase.auth().signOut().then(()=>{
            this.$router.push({ name: 'Login' })
        })
    }
    },
    created(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
            }
            else{
                this.user = null
            }
        })
  }
}
</script>