<template>
  <panel title="View History">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="cocktails">
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
import CocktailHistoryService from '@/services/CocktailHistoryService';

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
        sortBy: 'historyCreatedAt',
        descending: true,
      },
      cocktails: [],
    };
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.cocktails = (await CocktailHistoryService.index({
        userId: this.user.id,
      })).data;
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
    ]),
  },
};
</script>

<style>

</style>