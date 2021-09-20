import Vue from "vue";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";

Vue.config.productionTip = false;
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(Buefy);

const routes = [{ path: "/", component: HomePage }, { path: "/about", component: AboutPage }];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");