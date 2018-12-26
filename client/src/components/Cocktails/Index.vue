<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <cocktails-search-panel class="mb-4"/>
      <cocktails-panel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
import CocktailsService from '@/services/CocktailsService';
import CocktailsPanel from './CocktailsPanel';
import CocktailsSearchPanel from './CocktailsSearchPanel';

export default {
  data() {
    return {
      cocktails: null,
    };
  },

  async mounted() {
    // request backend songs
    this.cocktails = (await CocktailsService.index()).data;
  },

  components: {
    CocktailsPanel,
    CocktailsSearchPanel,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cocktail {
  padding: 20px;
  height: 33%;
  overflow: hidden;
}

.cocktail-name {
 font-size: 30px;
}

.cocktail-description {
  font-size: 24px;
}

.cocktail-category {
  font-size: 18px;
}

.cocktail-image {
  width: 70%;
  margin: 0 auto;
}
</style>
