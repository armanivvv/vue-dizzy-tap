import Api from '@/services/Api';

export default {
  index(search) {
    return Api().get('cocktails', {
      params: {
        search,
      },
    });
  },
  show(cocktailId) {
    return Api().get(`cocktails/${cocktailId}`);
  },
  post(cocktail) {
    return Api().post('cocktails', cocktail);
  },
  put(cocktail) {
    return Api().put(`cocktails/${cocktail.id}`, cocktail);
  },
};
