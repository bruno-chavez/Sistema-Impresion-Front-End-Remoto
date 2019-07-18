<template>
    <div>
        {{titles}}
    </div>
</template>

<script>
  import axios from 'axios'
  import { env } from '../../mixins/env'

  export default {
    name: "dashboard",
    mixins: [env],
    data () {
      return {
        titles: []
      }
    },
    async created() {
      let res = await axios.get(`${this.backend}/file/titles`, {withCredentials: true});
      this.titles = res.data;
    }
  }
</script>

<style scoped>

</style>
