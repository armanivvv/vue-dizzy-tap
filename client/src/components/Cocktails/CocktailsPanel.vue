<template>
  <panel title="Cocktails">
    <v-btn slot="action"
      class="cyan accent-1"
      small absolute light right middle fab
      :to="{
          name: 'cocktails-create'
        }">
      <v-icon>add</v-icon>
    </v-btn>
    <div v-for="cocktail in cocktails" :key="cocktail.id" class="cocktail">

      <v-layout>
        <v-flex xs6>
          <div class="cocktail-name">
          {{ cocktail.name }}
          </div>
          <!-- <div class="cocktail-description">
          {{ cocktail.description }}
          </div> -->
          <div class="cocktail-category">
          {{ cocktail.category }}
          </div>
          <v-btn dark class="cyan"
            :to="{
              name: 'cocktail',
              params: {
                cocktailId: cocktail.id
              }
            }">
            View
            </v-btn>

        </v-flex>
        <v-flex xs6>
          <img class="cocktail-image"  :src="cocktail.imageUrl"/>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import CocktailsService from '@/services/CocktailsService';

export default {
  data() {
    return {
      cocktails: null,
    };
  },

  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.cocktails = (await CocktailsService.index(value)).data;
      },
    },
  },

  // Old backend request methodology
  // async mounted() {
  //   this.cocktails = (await CocktailsService.index()).data;
  // },
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

