<template>
  <panel title="Cocktail Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="cocktail-name">
        {{ cocktail.name }}
        </div>
        <div class="cocktail-description">
        {{ cocktail.description }}
        </div>
        <div class="cocktail-category">
        {{ cocktail.category }}
        </div>

      </v-flex>
      <v-flex xs6>
        <img class="cocktail-image"  :src="cocktail.imageUrl"/>
        <br>
        {{ cocktail.glass }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel';

export default {
  props: [
    'cocktail',
  ],

  components: {
    Panel,
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
