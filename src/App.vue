<template>
    <div id="app">
        <div id="nav">
            <template v-if="session === 'false'">
                <router-link to="/register">Register</router-link>
                |
                <router-link to="/">Login</router-link>
            </template>
            <template v-if="session !== 'false'">
                <router-link to="/dashboard">Dashboard</router-link>
                |
                <router-link to="/upload">Upload</router-link>
                |
                <router-link to="/print">Print</router-link>
                |
                <router-link to="/logout">Logout</router-link>

            </template>
        </div>
        <router-view/>
    </div>
</template>

<script>
  import axios from 'axios'
  import {env} from './mixins/env'

  export default {
    mixins: [env],
    data() {
      return {
        session: ''
      }
    },
    methods: {
      async checkSession() {
        let res = await axios.get(`${this.backend}/auth/session`, {withCredentials: true});
        console.log(res.data.message);
        this.session = res.data.message
      }
    },
    async created() {
      this.checkSession()
    }
  }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
