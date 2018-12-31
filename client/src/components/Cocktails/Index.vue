<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6 v-if="isUserLoggedIn">
        <cocktails-bookmarks />
        <recently-viewed-cocktails class="mt-2" />
      </v-flex>

      <v-flex :class="{
          xs12: !isUserLoggedIn,
          xs6: isUserLoggedIn
        }" class="ml-2">
        <cocktails-search-panel />
        <cocktails-panel class="mt-2"/>
      </v-flex>
      <!-- <v-flex xs6 offset-xs3>
        <cocktails-search-panel class="mb-4"/>
        <cocktails-panel class="mt-4"/>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import CocktailsService from '@/services/CocktailsService';
import CocktailsPanel from './CocktailsPanel';
import CocktailsSearchPanel from './CocktailsSearchPanel';
import CocktailsBookmarks from './CocktailsBookmarks';
import RecentlyViewedCocktails from './RecentlyViewedCocktails';


export default {
  data() {
    return {
      cocktails: null,
    };
  },

  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
  },

  async mounted() {
    this.cocktails = (await CocktailsService.index()).data;
  },

  // watch: {
  //   '$route.query.search': {
  //     immediate: true,
  //     async handler(value) {
  //       this.cocktails = (await CocktailsService.index(value)).data;
  //     },
  //   },
  // },

  components: {
    CocktailsPanel,
    CocktailsSearchPanel,
    CocktailsBookmarks,
    RecentlyViewedCocktails,
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
