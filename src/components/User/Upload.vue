<template>
    <div style="display: flex;
  align-items: center;
  justify-content: center;">
        <form id="form" ref="form" style="align-content: center">
            <div style="height: 30px"></div>
            <input type="file" name="file" required>
            <div style="height: 60px"></div>
            <mdb-btn type="button" v-on:click="submitFile">Subir Archivo</mdb-btn>
        </form>
    </div>
</template>

<script>
  import axios from 'axios'
  import {mdbBtn} from 'mdbvue';

  export default {
    name: 'upload',
    components: {
      mdbBtn
    },
    data() {
      return {
        return: {
          file: null,
        }
      }
    },
    methods: {
      async submitFile() {
        // Selects the form
        let formData = new FormData(document.querySelector('form'));

        // Looks up the file type
        if (formData.get('file').type !== 'application/pdf') {
          alert('El archivo que intenta subir no es un pdf');
          return;
        }
        // Sends the request
        let res = await axios({
          method: 'post',
          url: `${process.env.VUE_APP_BACKEND}/file/upload`,
          data: formData,
          headers: {'content-type': 'multipart/form-data;'},
          withCredentials: true
        }).catch(() => {
          alert('Archivo supera los 15MB maximos por archivo')
          }
        );

        if (res.data.message === 'File created') {
          this.$router.push({name: 'userDashboard'})
        } else if (res.data.message === 'Too many files for a sinlge user'){
          alert('No puedes subir mas archivos cuando ya tienes diez archivos en la plataforma')
        } else if (res.data.message === 'File with same name already uploaded') {
          alert('Ya subiste un archivo con ese nombre')
        } else {
          alert('Error al guardar el archivo')
        }
        console.log(res.data.message);
      }
    },
  }
</script>
