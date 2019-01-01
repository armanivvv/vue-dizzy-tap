<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6>
        <panel title="Cocktail Metadata">
          <v-text-field
            label="Name*"
            :rules="[required]"
            v-model="cocktail.name"
          ></v-text-field>

          <v-text-field
            label="Description*"
            v-model="cocktail.description"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Ingredient*"
            v-model="cocktail.ingredient"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Alcoholic*"
            v-model="cocktail.alcoholic"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Category*"
            v-model="cocktail.category"
            :rules="[required]"
          ></v-text-field>

          <v-text-field
            label="Glass*"
            v-model="cocktail.glass"
            :rules="[required]"
          ></v-text-field>
        </panel>
      </v-flex>

      <v-flex xs6>
        <panel title="Photo Uploader" class="ml-4">
          <v-text-field
            label="Image URL"
            v-model="cocktail.imageUrl"
          ></v-text-field>
        </panel>

        <div class="danger-alert" v-if="error">{{ error }}</div>

        <v-btn dark class="primary" @click="save">Save Cocktail</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CocktailsService from '@/services/CocktailsService';

export default {
  data() {
    return {
      cocktail: {
        name: null,
        description: null,
        ingredient: null,
        alcoholic: null,
        category: null,
        glass: null,
        imageUrl: null,
      },
      error: null,
      required: value => !!value || 'Required.',
    };
  },

  methods: {
    async save() {
      this.error = null;
      const areAllFieldsFilledIn = Object
        .keys(this.cocktail)
        .every(key => !!this.cocktail[key]);
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.';
        return;
      }

      // const cocktailId = this.$store.state.route.params.cocktailId;
      try {
        await CocktailsService.put(this.cocktail);
        this.$router.push({
          name: 'cocktail',
          params: {
            cocktailId: this.cocktail.id,
          },
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
  },

  async mounted() {
    try {
      const cocktailId = this.$store.state.route.params.cocktailId;
      this.cocktail = (await CocktailsService.show(cocktailId)).data;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
