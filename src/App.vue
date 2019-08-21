<template>
    <div id="app">
        <div id="nav">
            <template v-if="session === 'false'">
                <router-link to="/">User Login</router-link>
                |
                <router-link to="/admin/login">Admin Login</router-link>
            </template>

            <template v-else-if="session === 'admin'">
                <router-link to="/admin/dashboard">Admin Dashboard</router-link>
                |
                <router-link to="/admin/register">Register Users</router-link>
                |
                <router-link to="/logout">Logout</router-link>
            </template>

            <template v-else>
                <router-link to="/student/dashboard">Student Dashboard</router-link>
                |
                <router-link to="/student/upload">File Upload</router-link>
                |
                <router-link to="/logout">Logout</router-link>
            </template>

        </div>
        <router-view/>
    </div>
</template>

<script>

  import axios from 'axios'
  import { eventBus } from "./eventBus";
  import { env } from './mixins/env'

  export default {
    mixins: [env],
    data() {
      return {
        session: ''
      }
    },
    methods: {
      async checkSession() {
        let res = await axios.get(`${this.backend}`, {withCredentials: true});
        this.session = res.data.message
      }
    },
        async created() {
          this.checkSession();
          eventBus.$on('check', () => {
            this.checkSession()
          });
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
