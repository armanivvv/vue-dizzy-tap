<template>
  <panel title="Cocktails">
    <v-btn slot="action"
      class="warning"
      small absolute light right middle fab
      :to="{
          name: 'cocktails-create'
        }">
      <v-icon>add</v-icon>
    </v-btn>

    <!-- adding in cards -->
    <!-- <v-card> -->
      <v-container
        fluid
        grid-list-md>
          <v-layout row wrap>
            <v-flex
            xs12 sm6 md4 offset-sm3 offset-md0
            v-for="cocktail in cocktails"
            :key="cocktail.id" >
              <v-card>
                <v-img
                  class="cocktail-image"
                  :src="cocktail.imageUrl"
                  height="300px">
                  <v-container fill-height fluid pa-2 >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="cocktail.name"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline" style="text-align: left">Top western road trips</div>
                    <div class="grey--text" style="text-align: left">1,000 miles of wonder</div>
                  </div>

                  <v-spacer></v-spacer>

                  <v-card-actions style="padding: 0px">
                    <v-btn icon
                    :to="{
                      name: 'cocktail',
                      params: {
                        cocktailId: cocktail.id
                      }}">
                      <v-icon>visibility</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
    <!-- </v-card> -->

  </panel>
</template>

<script>
import CocktailsService from '@/services/CocktailsService';

export default {
  data() {
    return {
      cocktails: null,
      // show: false,
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

.cocktail-name {
 font-size: 30px;
}

.cocktail-description {
  font-size: 24px;
}

.cocktail-category {
  font-size: 18px;
}

/* .cocktail-image {
  width: 100%;
  margin: 0 auto;
} */
</style>

