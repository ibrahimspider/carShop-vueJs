<template>
  <div class="sidebar">
    <ul class="sidebar-nav">
      <router-link
        tag="li"
        v-for="(EachCar, i) in carType"
        :key="i"
        :to="{ name: 'EachCar', params: { carType: EachCar.carName } }"
      >
        <a>{{ EachCar.carName }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import carType from "@/json/carTypes.json";

export default {
  name: "sideBar",
  data() {
    return { carType: carType };
  },
};
</script>

<style lang="scss" scopde>
.sidebar-nav {
  li {
    list-style: none;
    width: 100%;
    a {
      display: block;
      font-weight: bold;
      padding: 10px;
      width: 100%;
      text-decoration: none;
      color: #fff;
      transition: 0.5s;
      background-color: #4c4f60;
      border-bottom: 2px solid #fff;
    }
  }
  a:hover {
    background-color: #fff;
    border-bottom: 2px solid #4c4f60;
    color: #4c4f60;
  }
}
</style>
