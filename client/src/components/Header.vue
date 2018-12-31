<template>
  <v-toolbar dark fixed class="primary">
    <v-toolbar-title class="mr-4">
      <router-link class="home" :to="{ name: 'root' }" tag="span">Dizzy Tab Lounge</router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark
        :to="{
          name: 'cocktails'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>
      <v-btn flat dark v-if="!$store.state.isUserLoggedIn"
        :to="{
          name: 'register'
        }">
        Signup
      </v-btn>
      <v-btn flat dark v-if="$store.state.isUserLoggedIn"
        @click="logout">
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
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

.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}

</style>
