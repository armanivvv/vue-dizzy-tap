<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{ props.item.name }}
        </td>
        <td class="text-xs-left">
          {{ props.item.ingredient }}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';

export default {
  data() {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Ingredient',
          value: 'ingredient',
        },
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true,
      },
      bookmarks: [],
    };
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data;
    }
  },
};
</script>

<style>

</style>
