<template>
    <div>
        <h1>¿Desea reiniciar la cuenta de paginas de los alumnos?</h1>
        <mdb-btn type="button" v-on:click="resetPages">Reiniciar</mdb-btn>
    </div>
</template>
<script>
  import axios from 'axios'
  import { mdbBtn} from 'mdbvue';

  export default {
    name: "admin",
    components: {
      mdbBtn
    },
    methods: {
      async resetPages() {
        let res = await axios.get(`${process.env.VUE_APP_BACKEND}/admin/reset`, {withCredentials: true});
        if (res.data.message === 'Pages for students got reset') {
          alert('El contador de paginas fue reiniciado para todos los estudiantes')
        } else {
          console.log(res.data.message);
        }
      }
    }
  }
</script>

<style scoped>
</style>
