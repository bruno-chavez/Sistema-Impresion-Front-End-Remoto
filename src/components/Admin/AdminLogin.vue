<template>
    <div id="login">
        <h1>Login</h1>
        <label>
            <input type="email" name="email" v-model="input.email" placeholder="Email" required/>
        </label>
        <label>
            <input type="password" name="password" v-model="input.password" placeholder="Password" required/>
        </label>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
  import axios from 'axios/index'
  import {env} from '../../mixins/env'

  export default {
    name: 'adminLogin',
    mixins: [env],
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
        let res = await axios.post(`${this.backend}/admin/login`, this.input, {withCredentials: true});
        if (res.data.message === 'Authenticated') {
          this.$router.push({name: 'adminDashboard'})
        } else {
          console.log(res.data)
        }
      }
    }
  }
</script>
