<template>
  <panel title="Recently Viewed Cocktails">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="histories">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{props.item.name}}
        </td>
        <td class="text-xs-right">
          {{props.item.ingredient}}
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
        sortBy: 'createdAt',
        descending: true,
      },
      histories: [],
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
      this.histories = (await CocktailHistoryService.index()).data;
    }
  },
};
</script>

<style>

</style>
