<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <router-link :to="{ name: 'root' }">Dizzy Tab Lounge</router-link>
    </v-toolbar-title>

    <!-- TODO implement -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </v-btn>
      <v-btn flat dark>
        <router-link :to="{ name: 'register' }">Sign Up</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
