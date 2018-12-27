<template>
  <panel title="Cocktail Metadata">
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
            name: 'cocktail-edit',
            params () {
              return{
                cocktailId: cocktail.id
              }
            }
          }">
        Edit
        </v-btn>

        <v-btn v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="setAsBookmark">
          Set Bookmark
        </v-btn>

        <v-btn v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="unsetAsBookmark">
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
      'user',
    ]),
  },

  watch: {
    async cocktail() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        const bookmarks = (await BookmarksService.index({
          cocktailId: this.cocktail.id,
        })).data;
        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
  },

  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          cocktailId: this.cocktail.id,
        })).data;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    async unsetAsBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
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
