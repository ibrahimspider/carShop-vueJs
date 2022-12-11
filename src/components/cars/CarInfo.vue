<template>
  <div class="car-info row">
    <div class="col-8">
      <div>
        <img
          v-if="
            mianImge.length < 1
              ? (mianImge = getCarUrl(getCarInfo.img))
              : mianImge
          "
          :src="mianImge"
          class="main-img"
        />
      </div>
      <div class="justify-co ntent-center row">
        <img
          v-for="(eachCarImage, x) in getCarInfo.images"
          :key="x"
          @click="mianImge = getCarUrl(eachCarImage)"
          :src="getCarUrl(eachCarImage)"
          class="smaal-img"
        />
      </div>
    </div>
    <div class="col-4">
      <h2 class="car-name">{{ getCarInfo.name }} | {{ getCarInfo.model }}</h2>
      <h5 class="year">Year: {{ getCarInfo.year }}</h5>
      <p class="description">{{ getCarInfo.description }}</p>
      <p class="uploadedon">uploaded on: {{ getCarInfo.uploadedon }}</p>
    </div>
  </div>
</template>

<script>
import getCarInfo from "@/json/cars-data.json";

export default {
  name: "CarInfo",
  data() {
    return {
      myCarDetails: getCarInfo,
      carName: this.$route.params.carName,
      carFileId: this.$route.params.carFileId,
      mianImge: "",
    };
  },
  methods: {
    getCarUrl(imgName) {
      let image = require.context("@/assets/honda/");
      return image("./" + imgName);
    },
  },
  computed: {
    getCarInfo() {
      let carData = "";
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].fileNumber == this.carFileId) {
          carData = this.myCarDetails[i];
          break;
        }
      }
      return carData;
    },
  },
};
</script>
<style lang="scss">
.main-img {
  border: 10px solid #d3d2d2;
  margin-bottom: 10px;
  width: 100%;
}
.car-name {
  color: #0b163f;
}
.year {
  color: #ff1e2e;
}
.description {
  color: #575757;
}
.uploadedon {
  color: #8b8989;
  font-size: 12px;
}
.row {
  .smaal-img {
    width: 23%;
    padding: 0;
    border: 5px solid #d3d2d2;
    margin: 0 1%;
    cursor: pointer;
  }
}
</style>
