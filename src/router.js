import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("./views/User/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import("./views/User/Register.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () =>
        import("./views/User/Profile.vue")
    },
  ]
});
