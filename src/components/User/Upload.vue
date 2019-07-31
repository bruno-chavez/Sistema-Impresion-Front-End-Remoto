<template>
    <div>
        <form id="form" ref="form">
            <input type="file" name="file" required>
            <button type="button" v-on:click="submitFile">Upload</button>
        </form>
    </div>

</template>

<script>
  import axios from 'axios/index'
  import {env} from '../../mixins/env'

  export default {
    name: 'upload',
    mixins: [env],
    data() {
      return {

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
          url: `${this.backend}/file/upload`,
          data: formData,
          headers: { 'content-type': 'multipart/form-data;' },
          withCredentials: true
        });

        if (res.data.message === 'File created') {
          this.$router.push({ name: 'userDashboard' })
        } else {
          console.log(res.data.message);
        }
      }
    },
  }
</script>
