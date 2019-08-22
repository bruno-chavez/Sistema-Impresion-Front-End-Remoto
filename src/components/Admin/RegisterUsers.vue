<template>
    <div id="register" style="width:50%; margin:0 auto;">

        <form>
            <p class="h4 text-center mb-4"> Register</p>
            <div class="grey-text">
                <mdb-input label="Nombre"
                           icon="user"
                           type="text"
                           name="name"
                           v-model="input.name"
                           required/>
                <mdb-input label="Correo Electronico"
                           icon="envelope"
                           type="email"
                           name="email"
                           v-model="input.email"
                           required/>
                <mdb-input label="Contraseña"
                           icon="lock"
                           type="password"
                           name="password"
                           v-model="input.password"
                           required/>
                <mdb-input label="Tipo"
                           icon="address-book"
                           type="text"
                           name="type"
                           v-model="input.type" required/>
            </div>
            <div class="text-center">
                <mdb-btn color="primary" type="button" v-on:click="register()">Register</mdb-btn>
            </div>
        </form>

    </div>
</template>

<script>
  import axios from 'axios';
  import {mdbInput, mdbBtn} from 'mdbvue';

  export default {
    name: 'registerUsers',
    components: {
      mdbInput,
      mdbBtn
    },
    data() {
      return {
        input: {
          name: '',
          email: '',
          password: '',
          type: ''
        }
      }
    },
    methods: {
      async register() {
        let res = await axios.post(`${process.env.VUE_APP_BACKEND}/admin/register`, this.input, {withCredentials: true});
        if (res.data.message === 'Student created') {
          this.$router.push({name: 'adminDashboard'})
        } else {
          console.log(res.data)
        }
      }
    }
  }
</script>
