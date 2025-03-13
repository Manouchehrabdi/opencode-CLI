<template>
  <nav>
    <router-link :class="navclass" to="/">Home</router-link> |
    <router-link :class="navclass" to="/about">About</router-link>
    |
    <router-link :class="navclass" to="/jobs">Jobs</router-link>
    |
    <router-link :class="navclass" to="/gallery">Gallery</router-link>
    |
    <router-link :class="navclass" to="/login">login</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      navclass: "bg-red-500 rounded-md p-2 text-inherit hover:bg-blue-400",
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #91252e;
} */
</style>
