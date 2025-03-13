<template>
  <nav>
    <router-link class="bg-red-500 rounded-md p-2 text-inherit  " to="/">Home</router-link> |
    <router-link class="bg-red-500 rounded-md p-2 text-inherit "  to="/about">About</router-link> |
    <router-link class="bg-red-500 rounded-md p-2 text-inherit " to="/jobs">Jobs</router-link> |
    <router-link class="bg-red-500 rounded-md p-2 text-inherit " to="/gallery">Gallery</router-link> | 
    <router-link class="bg-red-500 rounded-md p-2 text-inherit " to="/login">login</router-link> 
  </nav>
  <router-view />
</template>

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
