<template>
    <div>
        <div v-for="title in titles">
            <h1 v-on:click="showFile(title)">{{title}}</h1>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import {env} from '../../mixins/env'

  export default {
    name: "userDashboard",
    mixins: [env],
    data() {
      return {
        titles: []
      }
    },
    methods: {
      async showFile(title) {
        window.open(`${this.backend}/file/download/${title}`)
      }
    },
    async created() {
      let res = await axios.get(`${this.backend}/file/titles`, {withCredentials: true});
      this.titles = res.data.titles;
    }
  }
</script>

<style scoped>

</style>
