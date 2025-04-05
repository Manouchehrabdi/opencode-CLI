<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/login">login</router-link>
  </nav>

  <button
    class="p-2 m border rounded-[8px] bg-blue-500 text-white"
    @click="backward"
  >
    Go To Back
  </button>
  <button @click="redirect">Redirect</button>
  <button @click="forword">Go To Forward</button>

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

nav a.router-link-exact-active {
  background: crimson;
  color: aliceblue;
  padding: 5px;
  border-radius: 5px;
}
</style>
