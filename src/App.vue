<template>
  <nav>
    <router-link to="/">خانه</router-link> |
    <router-link to="/about">درباره ما</router-link> |
    <router-link to="/jobs">شغل</router-link> |
    <router-link to="/gallery">گالری</router-link> |
    <router-link to="/login">ورود</router-link>
  </nav>
  <div>
    <button class="text-white bg-blue-700 hover:bg-red-800 focus:ring-4  cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-red-800" @click="backward">برگشت</button>
    <button class="text-white bg-blue-700 hover:bg-red-800 focus:ring-4  cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-red-800" @click="redirect">صفحه اصلی</button>
    <button class="text-white bg-blue-700 hover:bg-red-800 focus:ring-4  cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-red-800" @click="forword">جلو</button>
  </div>

  <router-view />
</template>
<script>

export default {
  methods:{
    backward(){
      this.$router.go(-1)
    },
    redirect(){
      this.$router.push({name:'Home'})

    },
    forword(){
      this.$router.go(1)
    }

  }
}
</script>
<style>
#app {
  font-family: "Yekan";
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
  
  border-radius: 7px;
  
}
</style>
