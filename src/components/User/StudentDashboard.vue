<template>
    <div class="container" style="align-content: center; margin:0 auto;">
        <h4>Actualmente te quedan {{info.pages}} páginas</h4>
        <h4>Actualmente tienes {{info.docs}} documentos</h4>
        <div class="row">
            <div class="col-md-6">
                <table class="table">
                    <thead>
                    <tr>
                        <th style="width: 600%">Nombre</th>
                        <th>Páginas</th>
                        <th>Mostrar</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="doc in documents">
                        <td>{{doc.title}}</td>
                        <td>{{doc.pages}}</td>
                        <td>
                            <mdb-btn v-on:click="printFile(doc.title)" type="button">Mostrar</mdb-btn>
                        </td>
                        <td>
                            <mdb-btn color="danger" v-on:click="deleteFile(doc.title)" type="button">Eliminar</mdb-btn>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import {mdbTbl, mdbTblHead, mdbTblBody, mdbBtn} from 'mdbvue';

  export default {
    name: "userDashboard",
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbBtn
    },
    data() {
      return {
        documents: {},
        info: {
          pages: 0,
          docs: 0
        }
      }
    },
    methods: {
      async updateFiles() {
        let documents = await axios.get(`${process.env.VUE_APP_BACKEND}/file/info`, {withCredentials: true});
        this.documents = documents.data.documents;
      },
      async updatePages() {
        let res = await axios.get(`${process.env.VUE_APP_BACKEND}/student/info`, {withCredentials: true});
        this.info.pages = res.data.pages;
        this.info.docs = res.data.docs;
      },
      async deleteFile(title) {
        let message = await axios.delete(`${process.env.VUE_APP_BACKEND}/file/delete/${title}`, {withCredentials: true});
        if (message.data.message !== "file deleted") {
          alert(message.data.message)
        } else {
          this.updateFiles();
        }
      },
      async printFile(title) {
        this.updatePages();
        window.open(`${process.env.VUE_APP_BACKEND}/file/fetch/show/${title}`)
      }
    },
    async created() {
      this.updatePages();
      this.updateFiles();
    }
  }
</script>

<style scoped>
</style>
