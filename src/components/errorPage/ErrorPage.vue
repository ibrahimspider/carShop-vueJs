<template>
  <div class="ErrorPage">
    <div class="container">
      <img src="@/imges/error.png" alt="erroe" class="error-img" />
      <h2>Page Not Found</h2>
      <button type="button" class="btn btn-danger" @click="goBack()">
        Go Back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  components: {},
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style>
.error-img {
  width: 100%;
  margin-bottom: 20px;
}
</style>
