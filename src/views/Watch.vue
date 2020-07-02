<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="9">
        <Player :meta="items" :part="selected" style="width: 100%"></Player>
      </v-col>
      <v-col cols="3">
        <v-card max-width="500" class="mx-auto">

          <v-list two-line>
            <v-list-item-group active-class="yellow--text">
              <template>
                <v-list-item>
                  <template>
                    <v-list-item-content>
                      <v-list-item-title>ซับไทยโดย</v-list-item-title>
                      <v-list-item-subtitle class="text--primary">
                        <b>nanimesub-fs</b>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content>
                      <v-list-item-title>สตูดิโอผู้สร้าง</v-list-item-title>
                      <v-list-item-subtitle class="text--primary">
                        <b>unfotable</b>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>

        <v-card max-width="500" class="mx-auto">
          <v-toolbar color="pink" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Episodes</v-toolbar-title>

          </v-toolbar>

          <v-list two-line>
            <v-list-item-group v-model="selected" active-class="pink--text">
              <template v-for="(item, index) in items.episode">
                <v-list-item :key="item.title">
                  <template>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        class="text--primary"
                        v-text="item.description"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index + 1 < items.length"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Player from "@/components/Player.vue";
import { db } from "../firebase";
export default {
  name: "Home",
  components: {
    Player
  },
  data() {
    return {
      data: "",
      selected: [0],
      items: []
    };
  },
  methods: {
    getVideo() {
      db.collection("series")
        .doc(this.$route.params.watchid)
        .get()
        .then(doc => {
          this.items = doc.data();
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  },
  mounted() {
    this.getVideo();
  }
};
</script>
