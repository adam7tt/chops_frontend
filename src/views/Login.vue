<template>
    <div class="login">
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                <div class="md-title">Login</div>
                </md-card-header>

                <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('username')">
                            <label for="username">username</label>
                            <md-input name="username" id="username" autocomplete="given-name" v-model="form.username" :disabled="sending" />
                            <span class="md-error" v-if="!form.username.required">The username is required</span>
                            <span class="md-error" v-else-if="!form.username.minlength">Invalid username</span>
                        </md-field>
                    </div> 

                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="getValidationClass('password')">
                            <label for="password">password</label>
                            <md-input name="password" id="password" autocomplete="given-name" v-model="form.password" :disabled="sending" />
                            <span class="md-error" v-if="!form.password.required">The password is required</span>
                            <span class="md-error" v-else-if="!form.password.minlength">Invalid password</span>
                        </md-field>
                    </div>
                </div>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Login</md-button>
                </md-card-actions>
            </md-card>

            <md-snackbar >The user {{ form.username }} was saved with success!</md-snackbar> <!-- :md-active.sync="userSaved" -->
            </form>
    </div>
</template>
<script>
/*export default {
    
}*/
module.exports = {
  data: function() {
       return {
        form:{
            username: '',
            password: ''
            },
            sending: false
        }
    },
  methods: {
      getValidationClass: function(username){
          console.log("login button pressed");
      }
  }
}
</script>

<style scoped>
    .login{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
</style>