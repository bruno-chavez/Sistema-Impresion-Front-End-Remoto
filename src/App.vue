<template>
    <div>
        <div>
        <div align="center"> <img src="@/assets/img/logo.png" width="50%" />
        </div>

        <template>
           <mdb-navbar color="indigo" dark>
             <mdb-navbar-brand href="https://mdbootstrap.com/">
               Sistema de Impresiones
             </mdb-navbar-brand>
             <mdb-navbar-toggler>
               <mdb-navbar-nav>
                <template v-if="session === 'false'">
                 <mdb-nav-item active>
                 <router-link to="/" class="routerlink">
                 User Login
                 </router-link>
                 </mdb-nav-item>
                 <mdb-nav-item href="#" active><router-link to="/admin/login">Admin Login</router-link></mdb-nav-item>
                </template>

                <template v-else-if="session === 'admin'">
                <mdb-nav-item href="#" active><router-link to="/admin/dashboard">Admin Dashboard</router-link></mdb-nav-item>
                <mdb-nav-item href="#" active><router-link to="/admin/register">Register Users</router-link></mdb-nav-item>
                <mdb-nav-item href="#" active>
                <router-link to="/logout">Logout</router-link>
                </mdb-nav-item>
                 </template>

                 <template v-else-if="'session' === 'Regular' || 'session' === 'Memorista'">
                 <mdb-nav-item href="#" active><router-link to="/student/dashboard">Student Dashboard</router-link></mdb-nav-item>
                 <mdb-nav-item href="#" active> <router-link to="/student/upload">File Upload</router-link></mdb-nav-item>
                 <mdb-nav-item href="#" active><router-link to="/logout">Logout</router-link></mdb-nav-item>
                 </template>
               </mdb-navbar-nav>
             </mdb-navbar-toggler>
           </mdb-navbar>
         </template>
        </div>
        <router-view/>
    </div>
</template>

<script>
  import axios from 'axios'
  import { eventBus } from "./eventBus";
  import { env } from './mixins/env'

  import Vue from 'vue';
  import {env} from './mixins/env'
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem } from 'mdbvue';
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
      },
      methodThatForcesUpdate() {
            this.checkSession();
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

    #routerlink{
      color: rgb(0, 0, 0)
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
