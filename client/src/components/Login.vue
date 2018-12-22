<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          label="Email"
          v-model="email"
          box
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          box
        ></v-text-field>
        <div class="danger-alert" v-html="error" />
        <v-btn dark class="cyan" @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },

  components: {
    Panel,
  },

  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
