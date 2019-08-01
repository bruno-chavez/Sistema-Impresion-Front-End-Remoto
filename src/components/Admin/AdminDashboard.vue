<template>
    <div>
        <h1 v-on:click="resetPages">Reset Pages?</h1>
        <button type="button" v-on:click="resetPages">Reset</button>
    </div>
</template>

<script>
  import axios from 'axios'
  import {env} from '../../mixins/env'

  export default {
    name: "admin",
    mixins: [env],
    methods: {
      async resetPages() {
        let res = await axios.get(`${this.backend}/admin/reset`, {withCredentials: true});
        if (res.data.message === 'Pages for students got reset') {
          alert(res.data.message)
        } else {
          console.log(res.data.message);
        }
      }
    }
  }
</script>

<style scoped>

</style>
