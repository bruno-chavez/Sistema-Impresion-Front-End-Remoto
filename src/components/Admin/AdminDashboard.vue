<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="user in users">
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                        <td>
                            <mdb-btn color="danger" v-on:click="deleteUser(user.email)" type="button">Eliminar</mdb-btn>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import { mdbBtn} from 'mdbvue';

  export default {
    name: "admin",
    data() {
      return {
        users: []
      }
    },
    components: {
      mdbBtn
    },
    methods: {
      async updateUsers() {
        let res = await axios.get(`${process.env.VUE_APP_BACKEND}/admin/users`, {withCredentials: true});
        this.users = res.data.students;
      },
      async deleteUser(user) {
        let res = await axios.delete(`${process.env.VUE_APP_BACKEND}/admin/delete/${user}`, {withCredentials: true});
        if (res.data.message === 'user deleted') {
          this.updateUsers();
        }
      },
    },
    async created() {
      this.updateUsers()
    }
  }
</script>

<style scoped>
</style>
