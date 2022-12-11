<template>
  <div class="CategoriesView">
    <CategoriesPage />
  </div>
</template>

<script>
import CategoriesPage from "@/components/categories/CategoriesPage.vue";

const components = {
  CategoriesPage,
};
export default {
  name: "CategoriesView",
  components,
};
</script>
