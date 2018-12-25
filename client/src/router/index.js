import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Cocktails from '@/components/Cocktails';
import CreateCocktail from '@/components/CreateCocktail';
import ViewCocktail from '@/components/ViewCocktail/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/cocktails',
      name: 'cocktails',
      component: Cocktails,
    },
    {
      path: '/cocktails/create',
      name: 'cocktails-create',
      component: CreateCocktail,
    },
    {
      path: '/cocktails/:cocktailId',
      name: 'cocktail',
      component: ViewCocktail,
    },
  ],
});
