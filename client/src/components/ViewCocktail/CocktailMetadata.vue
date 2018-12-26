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

        <v-btn dark class="cyan"
          :to="{
            name: 'cocktail-edit',
            params () {
              return{
                cocktailId: cocktail.id
              }
            }
          }">
        Edit
        </v-btn>

        <v-btn dark class="cyan"
          @click="bookmark"
          v-if="isUserLoggedIn && isBookmarked">
          Bookmark
        </v-btn>

        <v-btn dark class="cyan"
          @click="unbookmark"
          v-if="isUserLoggedIn && !isBookmarked">
          Unbookmark
        </v-btn>

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
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';

export default {
  props: [
    'cocktail',
  ],

  data() {
    return {
      isBookmarked: false,
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
  },

  async mounted() {
    if (this.isUserLoggedIn) {
      return;
    }
    try {
      const bookmark = (await BookmarksService.index({
        cocktailId: this.cocktail.id,
        userId: this.$store.state.user.id,
      })).data;
      this.isBookmarked = !!bookmark;
    } catch (error) {
      this.error = error.response.data.error;
    }
  },

  methods: {
    async bookmark() {
      try {
        await BookmarksService.post({
          cocktailId: this.cocktail.id,
          userId: this.$store.state.user.id,
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async unbookmark() {
      try {
        await BookmarksService.delete({
          cocktailId: this.cocktail.id,
          userId: this.$store.state.user.id,
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
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
