<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <router-link :to="{ name: 'root' }">Dizzy Tab Lounge</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark
      @click="navigateTo({ name: 'cocktails' })">
        <!-- <router-link :to="{ name: 'cocktails' }">Login</router-link> -->
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({ name: 'login' })">
        <!-- <router-link :to="{ name: 'login' }">Login</router-link> -->
        Login
      </v-btn>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
      @click="navigateTo({ name: 'register' })">
        <!-- <router-link :to="{ name: 'register' }">Sign Up</router-link> -->
        Signup
      </v-btn>
      <v-btn flat dark v-if="$store.state.isUserLoggedIn"
      @click="logout">
        <!-- <router-link :to="{ name: 'logout' }">Logout</router-link> -->
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'root',
      });
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
