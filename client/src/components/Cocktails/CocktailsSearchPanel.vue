<template>
  <panel title="Search">
    <v-text-field
      label="Search by name, ingredient or other"
      v-model="search"
      box
    ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      search: '',
    };
  },

  watch: {
    // eslint-disable-next-line
    search: _.debounce(async function () {
      const route = {
        name: 'cocktails',
      };
      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style>

</style>
