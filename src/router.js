import Vue from "vue";
import Router from "vue-router";

//  Main Pages
import Index from "./views/Index.vue";
import AboutUs from "./views/components/AboutUs.vue";

import MainNavbar from "./layout/MainNavbar.vue";
import MainNavbarORG from "./layout/MainNavbarORG.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    }, 
    {
      path: "/about-us",
      name: "about-us",
      components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400, navbarTransparent: true }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
