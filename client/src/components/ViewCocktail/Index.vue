<template>
  <v-layout>
    <v-flex xs6 class="mr-2">
      <cocktail-metadata :cocktail="cocktail" />
    </v-flex>

    <v-flex xs6 class="ml-2">
      <recipe :cocktail="cocktail" />
    </v-flex>
  </v-layout>
</template>

<script>
import CocktailsService from '@/services/CocktailsService';
import CocktailMetadata from './CocktailMetadata';
import Recipe from './Recipe';

export default {
  data() {
    return {
      cocktail: {},
    };
  },

  async mounted() {
    const cocktailId = this.$store.state.route.params.cocktailId;
    this.cocktail = (await CocktailsService.show(cocktailId)).data;
  },

  components: {
    CocktailMetadata,
    Recipe,
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
