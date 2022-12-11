<template>
  <div class="home row">
    <div class="col-2">
      <side-bar :carsData="carsData" />
    </div>
    <div class="col 10">
      <CarsPage :carsData="carsData" />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
import CarsPage from "@/components/cars/CarsPage.vue";
import getCarsJson from "@/json/cars-data.json";

const components = {
  SideBar,
  CarsPage,
};

export default {
  name: "HomeView",
  data() {
    return {
      carsData: getCarsJson,
    };
  },
  components,
};
</script>
