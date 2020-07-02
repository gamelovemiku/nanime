<template>
  <v-container>
    <v-row no-gutters>
      <div>
        <h1 class="display-1 font-weight-black">NAN!ME</h1>
        <p class="subtitle-1">
          ดูอนิเมะออนไลน์
        </p>
      </div>
    </v-row>
    <v-row>
      <v-col cols="2" v-for="item in items" :key="item.title">
        <v-card class="mx-auto" outlined tile>
          <v-img
            class="black--text align-end"
            height="360px"
            :src="item.cover"
          ></v-img>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{
                item.title
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                item.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <div>ทั้งหมด {{ item.episode.length }} Episodes</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="pink" @click="$router.replace('/watch/' + item.uid)"
              >ดูเรื่องนี้</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "Home",
  data() {
    return {
      data: "",
      selected: [0],
      items: []
    };
  },
  methods: {
    getAllVideo() {
      db.collection("series")
        .get()
        .then(querySnapshot => {
          this.items = querySnapshot.docs.map(doc => doc.data());
        })
        .catch(err => {
          window.console.log("Not found..", err);
        });
    }
  },
  mounted() {
    this.getAllVideo();
    document.title = `NAN!ME ดูอนิเมะออนไลน์`;
  }
};
</script>
