<template>
  <div class="justify-content-evenly row">
    <h1 class="text-center">
      <span class="car-type">
        {{ carType }}
      </span>
    </h1>

    <div class="col-4 eacd-car" v-for="(eachCar, i) in getCarInfo" :key="i">
      <img :src="getCarUrl(eachCar.img)" class="img-fluid" />
      <h4 class="text-center">{{ eachCar.name }} | {{ eachCar.model }}</h4>
      <div>
        <div class="">
          <span class="btn-light">{{ eachCar.price }}</span>
        </div>
        <div class="">
          <router-link
            :to="{
              name: 'CarInfo',
              params: { carName: eachCar.name, carFileId: eachCar.fileNumber },
            }"
          >
            <button class="btn btn-primary">more</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCarsJson from "@/json/cars-data.json";

export default {
  name: "EachCar",
  data() {
    return {
      myCarDetails: getCarsJson,
      carType: this.$route.params.carType,
    };
  },
  computed: {
    getCarInfo() {
      let carData = [];
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].name == this.carType) {
          carData.push(this.myCarDetails[i]);
        }
      }
      return carData;
    },
  },
  methods: {
    getCarUrl(imgName) {
      let image = require.context("@/assets/honda/");
      return image("./" + imgName);
    },
  },
};
</script>
<style lang="scss">
.eacd-car {
  padding: 6px;
  margin-bottom: 20px;
  border: 2px solid #f8f9fa;
  border-radius: 5px;
  transition: 0.5s;
  background-color: #f8f9fa;
  overflow: hidden;

  img {
    margin-bottom: 10px;
    border-radius: 5px;
    transition: 0.3s;
  }
  h4 {
    transition: 0.3s;
    margin-bottom: 20px;
    color: #0b163f;
  }
  .btn-light {
    display: inline-block;
    padding: 3px 10px;
    background-color: #ff1e2e;
    color: #f8f9fa;
    border-radius: 25px;
    margin-bottom: 20px;
  }
  .btn-primary {
    width: 100%;
    background-color: #fff;
    border: none;
    color: #111010;
    font-weight: bold;
    margin: 10px 0;
    border: 1px solid rgba(11, 22, 63, 0.07);
  }
  .btn-primary:hover {
    background-color: #fc0012;
    color: #fff;
    border: 1px solid #fc0012;
  }
  h4:hover {
    color: #fc0012;
  }
}
.eacd-car:hover {
  background-color: #fff;

  img {
    transform: scale(1.1111);
  }
}
.car-type {
  display: inline-block;
  padding: 10px 40px;
  background-color: #0b163f;
  border-radius: 50px;
  color: #fff;
  margin-bottom: 50px;
}
</style>
