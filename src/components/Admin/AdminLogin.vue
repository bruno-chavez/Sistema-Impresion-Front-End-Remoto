<template>
    <div id="login">
        <form>
            <p class="h4 text-center mb-4">Admin Log In
            <div class="grey-text">
                <mdb-input type="email" name="email" v-model="input.email" placeholder="Email" required/>
                <mdb-input type="password" name="password" v-model="input.password" placeholder="Password" required/>
            </div>
            <div class="text-center">
                <mdb-btn type="button" v-on:click="login()">Login</mdb-btn>
            </div>

        </form>
    </div>
</template>

<script>
  import axios from 'axios/index'
  import {mdbInput, mdbBtn} from 'mdbvue';

  export default {
    name: 'adminLogin',
    components: {
      mdbInput,
      mdbBtn
    },
    data() {
      return {
        input: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async login() {
        let res = await axios.post(`${process.env.VUE_APP_BACKEND}/admin/login`, this.input, {withCredentials: true});
        if (res.data.message === 'Authenticated') {
          this.$router.push({name: 'adminDashboard'})
        } else {
          console.log(res.data)
        }
      }
    }
  }
</script>
