<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
<h2>{{ job.title }}</h2>
  </div>
</template>
<script>
export default{
    data(){
      return{
        jobs: [
          {title:'Open code Javascript', id:1, details: 'lorem' },
          {title:'Open code React', id:2, details: 'lorem' },
          {title:'Open code Vue3', id:3, details: 'lorem' }
        ]
      }
    }
}
</script>