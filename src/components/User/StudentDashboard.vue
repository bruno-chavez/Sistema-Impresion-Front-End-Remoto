<template>
    <div>
        <div v-for="title in titles">
            <h1 v-on:click="showFile(title)">{{title}}</h1>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "userDashboard",
    data() {
      return {
        titles: []
      }
    },
    methods: {
      async showFile(title) {
        window.open(`${process.env.VUE_APP_BACKEND}/file/download/${title}`)
      }
    },
    async created() {
      let res = await axios.get(`${process.env.VUE_APP_BACKEND}/file/titles`, {withCredentials: true});
      this.titles = res.data.titles;
    }
  }
</script>

<style scoped>

</style>
