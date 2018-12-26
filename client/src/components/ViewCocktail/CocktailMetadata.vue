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
          @click="setAsBookmark"
          v-if="isUserLoggedIn && bookmark">
          Set Bookmark
        </v-btn>

        <v-btn dark class="cyan"
          @click="unsetAsBookmark"
          v-if="isUserLoggedIn && !bookmark">
          Remove Bookmark
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
      bookmark: null,
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
  },

  watch: {
    async cocktail() {
      if (this.isUserLoggedIn) {
        return;
      }
      try {
        this.bookmark = (await BookmarksService.index({
          cocktailId: this.cocktail.id,
          userId: this.$store.state.user.id,
        })).data;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },

  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          cocktailId: this.cocktail.id,
          userId: this.$store.state.user.id,
        })).data;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async unsetAsBookmark() {
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
