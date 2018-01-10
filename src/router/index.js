import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello";
import LandingSplash from "@/components/LandingSplash";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "LandingSplash",
      component: LandingSplash
    },
    {
      path: "/hello",
      name: "Hello",
      component: Hello
    }
  ]
});
