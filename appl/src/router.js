import Router from "vue-router";
import vue from "vue";

import Welc from './Views/Welc'
import Profile from './Views/Profile'

vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    { path: '/',name:'welc', component: Welc},
    { path: '/profile',name:'profile', component: Profile}
  ]
});
