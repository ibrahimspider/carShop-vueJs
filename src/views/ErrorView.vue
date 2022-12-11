<template>
  <div class="ErrorPage">
    <ErrorPage />
  </div>
</template>

<script>
import ErrorPage from "@/components/errorPage/ErrorPage.vue";

const components = {
  ErrorPage,
};
export default {
  name: "ErrorView",
  components,
};
</script>
