<template>
  <v-toolbar dark fixed class="primary">
    <v-toolbar-title class="mr-2">
      <router-link :to="{ name: 'root' }" class="home image" tag="img" src="https://res.cloudinary.com/dyocdwgu9/image/upload/v1545899286/Dizzy%20Lounge/logo.png"></router-link>
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

.image {
  margin-top: 17%;
  width: 120px;
}

.home:hover {
  color: #E9E;
}

</style>
