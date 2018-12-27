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
import { mapState } from 'vuex';
import CocktailsService from '@/services/CocktailsService';
import CocktailHistoryService from '@/services/CocktailHistoryService';
import CocktailMetadata from './CocktailMetadata';
import Recipe from './Recipe';

export default {
  data() {
    return {
      cocktail: {},
    };
  },

  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route',
    ]),
  },

  async mounted() {
    const cocktailId = this.$store.state.route.params.cocktailId;
    this.cocktail = (await CocktailsService.show(cocktailId)).data;

    if (this.isUserLoggedIn) {
      CocktailHistoryService.post({
        cocktailId,
      });
    }
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
