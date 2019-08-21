<template>
    <div id="logout">
        <h1>Logout</h1>
        <h2>Exit session?</h2>
        <button type="button" v-on:click="logout()">Logout</button>
    </div>
</template>

<script>
  import axios from 'axios/index'
  import {env} from '../../mixins/env'

  export default {
    name: 'logout',
    mixins: [env],
    methods: {
      async logout() {
        await axios.delete(`${this.backend}/auth/logout`, {withCredentials: true});
        this.$router.push({name: 'studentLogin'})
        this.$parent.methodThatForcesUpdate()
      }
    }
  }
</script>
