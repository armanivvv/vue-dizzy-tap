import Api from '@/services/Api';

export default {
  index() {
    return Api().get('cocktails');
  },
  post(cocktail) {
    return Api().post('cocktails', cocktail);
  },
};
