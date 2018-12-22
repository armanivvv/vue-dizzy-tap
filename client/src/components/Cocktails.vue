<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Cocktails">
        <div v-for="cocktail in cocktails" :key="cocktail.name">
          {{ cocktail.name }} -
          {{ cocktail.description }} -
          {{ cocktail.category }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel';
import CocktailsService from '@/services/CocktailsService';

export default {
  data() {
    return {
      cocktails: null,
    };
  },

  async mounted() {
    // request backend songs
    this.cocktails = await CocktailsService.index();
  },

  components: {
    Panel,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
