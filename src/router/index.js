import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import ContactView from "../views/ContactView.vue";
import ErrorView from "../views/ErrorView.vue";
import EachCar from "../components/cars/EachCar.vue";
import CarInfo from "../components/cars/CarInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/AboutView",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/CategoriesView",
    name: "CategoriesView",
    component: CategoriesView,
  },
  {
    path: "/ContactView",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/view/car/:carType",
    name: "EachCar",
    component: EachCar,
  },
  {
    path: "/view/car/:carName/:carFileId",
    name: "CarInfo",
    component: CarInfo,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorView",
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let dcoumentTitle = `${process.env.VUE_APP_TITLE} | `;
  if (to.params.pageTitle) {
    dcoumentTitle += `${to.params.pageTitle}`;
  }
  document.title = dcoumentTitle;
  next();
});

export default router;
