<template>
    <div>
        <img src="./assets/img/logo.png" width="50%" alt="logo"/>

        <template>
            <mdb-navbar color="indigo" dark>
                <mdb-navbar-brand>Sistema de Impresiones</mdb-navbar-brand>
                <mdb-navbar-toggler>
                    <mdb-navbar-nav>
                        <template v-if="session === 'none'">
                            <mdb-nav-item active>
                                <router-link to="/" class="nav-bar-item">User Login</router-link>
                            </mdb-nav-item>
                            <mdb-nav-item active>
                                <router-link to="/admin/login" class="nav-bar-item">Admin Login</router-link>
                            </mdb-nav-item>
                        </template>

                        <template v-else-if="session === 'admin'">
                            <mdb-nav-item>
                                <router-link to="/admin/dashboard" class="nav-bar-item">Admin Dashboard</router-link>
                            </mdb-nav-item>
                            <mdb-nav-item>
                                <router-link to="/admin/register" class="nav-bar-item">Register Users</router-link>
                            </mdb-nav-item>
                            <mdb-nav-item>
                                <router-link to="/logout" class="nav-bar-item">Logout</router-link>
                            </mdb-nav-item>
                        </template>

                        <template v-else>
                            <mdb-nav-item>
                                <router-link to="/student/dashboard" class="nav-bar-item">Student Dashboard
                                </router-link>
                            </mdb-nav-item>
                            <mdb-nav-item>
                                <router-link to="/student/upload" class="nav-bar-item">File Upload</router-link>
                            </mdb-nav-item>
                            <mdb-nav-item>
                                <router-link to="/logout" class="nav-bar-item">Logout</router-link>
                            </mdb-nav-item>
                        </template>
                    </mdb-navbar-nav>
                </mdb-navbar-toggler>
            </mdb-navbar>
        </template>
        <router-view/>
    </div>
</template>

<script>
  import axios from 'axios'
  import {eventBus} from "./eventBus";
  import {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput
  } from 'mdbvue';

  export default {
    components: {
      mdbInput,
      mdbNavbar,
      mdbNavbarBrand,
      mdbDropdownToggle,
      mdbNavbarToggler,
      mdbDropdownItem,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu
    },
    data() {
      return {
        session: '',
      }
    },
    methods: {
      async checkSession() {
        let res = await axios.get(`${process.env.VUE_APP_BACKEND}/auth/session`, {withCredentials: true});
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

    .nav-bar-item {
        color: white;
    }
    .nav-bar-item :hover {
        color: white;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: white;
    }

    #nav a.router-link-exact-active {
        color: white;
    }
</style>
