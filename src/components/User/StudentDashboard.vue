<template>

    <div class="container" style="align-content: center; margin:0 auto;">
        <div class="row">
            <div class="col-md-6">
                <table class="table">
                    <thead>
                    <tr>
                        <th style="width: 600%" >File Name</th>
                        <th>Print</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="title in titles">
                        <td>{{title}}</td>
                        <td><mdb-btn v-on:click="showFile(title)" type="button">Mostrar</mdb-btn></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</template>

<script>
  import axios from 'axios';
  import { mdbTbl, mdbTblHead, mdbTblBody, mdbBtn } from 'mdbvue';

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
        titles: []
      }
    },
    methods: {
      async showFile(title) {
        window.open(`${process.env.VUE_APP_BACKEND}/file/download/${title}`)
      }
    },
    async created() {
      let res = await axios.get(`${process.env.VUE_APP_BACKEND}/file/titles`, {withCredentials: true});
      this.titles = res.data.titles;
    }
  }
</script>

<style scoped>

</style>
