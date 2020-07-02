<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link @click="$router.replace('/')">
          <v-list-item-action>
            <v-icon>mdi-cat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>หน้าหลัก</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contacts</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ติดต่อเรา</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>NAN!ME</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>
        เว็บไซต์นี้ทำเพื่อการศึกษาการศึกษาในการ Coding
        เท่านั้นมิได้มีเจตนาในการละเมิดลิขสิทธิ์
        สำหรับเนื้อหาที่มีลิขสิทธิ์สามารถส่งข้อความหาเราได้ที่ admin@nanime.com เพื่อนำออก
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
