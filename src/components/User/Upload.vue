<template>
    <div style="display: flex;
  align-items: center;
  justify-content: center;">
        <form id="form" ref="form" style="align-content: center">
            <div style="height: 100px"></div>
            <input type="file" name="file" required >
            <div style="height: 20px"></div>
            <button class="btn btn-primary" type="button" v-on:click="submitFile">Upload</button>
        </form>
    </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'upload',
    data() {
      return {
          return:{
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
          alert('File is not a pdf');
          return;
        }
        // Sends the request
        let res = await axios({
          method: 'post',
          url: `${process.env.VUE_APP_BACKEND}/file/upload`,
          data: formData,
          headers: {'content-type': 'multipart/form-data;'},
          withCredentials: true
        });

        if (res.data.message === 'File created') {
          this.$router.push({name: 'userDashboard'})
        } else {
          console.log(res.data.message);
        }
      }
    },
  }
</script>
