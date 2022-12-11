<template>
  <div class="nav-page">
    <ul class="nav">
      <router-link
        tag="li"
        :to="{ name: 'home', params: { pageTitle: 'Home' } }"
        exact
      >
        <a>Home</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'AboutView', params: { pageTitle: 'Abou' } }"
      >
        <a>Abou</a>
      </router-link>
      <router-link
        tag="li"
        :to="{
          name: 'CategoriesView',
          params: { pageTitle: 'Categories' },
        }"
      >
        <a>Categories</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'ContactView', params: { pageTitle: 'Contact' } }"
      >
        <a>Contact</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss">
.nav-page {
  margin-bottom: 50px;
  background-color: #141619;
}
.nav {
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  li {
    display: inline-block;
    margin: 0 5px;
    transition: 0.3s;
    border-bottom: 1.5px solid #141619;

    a {
      display: inline-block;
      text-decoration: none;
      color: #fc0012;
      padding: 10px;
      transition: 0.3s;
    }
  }
  li:hover {
    border-bottom: 1.5px solid #fff;
    a {
      color: #fff;
    }
  }
}
.nav .router-link-exact-active {
  border-bottom: 1.5px solid #fff;
  a {
    color: #fff;
  }
}
</style>
