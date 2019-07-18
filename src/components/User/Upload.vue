<template>
    <div>
        <form ref="form" action="http://localhost:8080/file/upload" method="POST" enctype="multipart/form-data" v-on:submit.prevent="submitFile">
            <input type="file" name="file" required>
            <button type="submit" >Upload</button>
        </form>
    </div>

</template>

<script>
  import axios from 'axios/index'
  import pdfjs from 'pdfjs-dist'
  import {env} from '../../mixins/env'

  export default {
    name: 'upload',
    mixins: [env],
    data() {
      return {
        doc: {
          pages: 0,
          file: ''
        }
      }
    },
    methods: {
      submitFile() {
        /*let self = this;

        // Reads and loads file
        let reader = new FileReader();
        reader.readAsArrayBuffer(this.$refs.form.file.files[0]);
        reader.onload = function () {

          // Transforms File object to byte array
          let arrayBuffer = this.result;
          let array = new Uint8Array(arrayBuffer);
          let binaryString = String.fromCharCode.apply(null, array);

          // PDF-JS loads byte array and counts total pages
          let loadingTask = pdfjs.getDocument(binaryString);
          loadingTask.promise.then(function(pdf) {
            self.pages = pdf.numPages;
          });
        };*/

        // Submits form
        this.$refs.form.submit()
      }
      /*submitFile() {
        let self = this;

        // Reads and loads file
        let reader = new FileReader();
        reader.readAsArrayBuffer(this.$refs.form.file.files[0]);
        reader.onload = function () {

          // Transforms File object to byte array
          let arrayBuffer = this.result;
          let array = new Uint8Array(arrayBuffer);
          let binaryString = String.fromCharCode.apply(null, array);

          // PDF-JS loads byte array and counts total pages
          let loadingTask = pdfjs.getDocument({data: binaryString});
          loadingTask.promise.then(pdf => {
            self.doc.pages = pdf.numPages;
            self.doc.file = binaryString;
          });
        };
        axios.post(`${this.backend}/file`, this.doc, {withCredentials: true})
      }*/
    },
  }
</script>
