import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Cocktails from '@/components/Cocktails/Index';
import CreateCocktail from '@/components/CreateCocktail';
import ViewCocktail from '@/components/ViewCocktail/Index';
import EditCocktail from '@/components/EditCocktail';
import Index from '@/components/Index';

Vue.use(Router);

export default new Router({
  routes: [
    // homepage redirects - TODO consider adding back component
    {
      path: '/',
      name: 'root',
      // redirect: 'cocktails',
      component: Index,
    },
    {
      path: '*',
      redirect: 'cocktails',
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
    {
      path: '/cocktails/:cocktailId/edit',
      name: 'cocktail-edit',
      component: EditCocktail,
    },
  ],
});
