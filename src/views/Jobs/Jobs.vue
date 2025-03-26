<template>
  <h1>Jobs</h1>
  <div class="flex justify-center "  v-for="job in jobs" :key="job.id">
    <h2
      class="font-mono font-bold bg-[#e5e0e0] p-3 rounded-xl m-3  ju cursor-pointer hover:bg-red-400 w-100 items-center"
    >
      {{ job.title }}
    </h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Open code Javascript", id: 1, details: "lorem" },
        { title: "Open code React", id: 2, details: "lorem" },
        { title: "Open code Vue3", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>

