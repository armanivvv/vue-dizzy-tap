<template>
  <panel title="Recipe">
    <v-layout>
      {{ cocktail.description }}
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

.cocktail-description {
  font-size: 24px;
}

</style>
