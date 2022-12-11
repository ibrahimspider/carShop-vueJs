<template>
  <div class="ContactView">
    <ContactPage />
  </div>
</template>

<script>
import ContactPage from "@/components/contact/ContactPage.vue";

const components = {
  ContactPage,
};
export default {
  name: "ContactView",
  components,
};
</script>
