<template>
  <v-container>
    <iframe
      :src="meta.episode[part].src"
      width="100%"
      height="672"
      style="border: none"
    ></iframe>
    <v-row>
      <v-col cols="2">
        <v-img :src="meta.cover"></v-img>
      </v-col>
      <v-col cols="10">
        <div>
          <h6 class="display-1 font-weight-bold">{{ meta.title }}</h6>
          <h1 class="title">{{ meta.episode[part].title }}</h1>
          <p style="margin-top: 1rem" class="body-1">
            {{ meta.description }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    meta: Object,
    part: Number
  },
  data() {
    return {
      videoid: 0
    };
  },
  methods: {
    updateVideo() {
      this.videoid += 1;
      document.title = `กำลังรับชม ${this.meta.title} ${this.meta.episode[this.part].title} - NAN!ME ดูอนิเมะออนไลน์`;
    }
  },
  computed: {},
  watch: {
    part: function(val) {
      let before;
      if (val != before) {
        before = val;
        this.updateVideo();
      }
    }
  },
  mounted() {
    document.title = `กำลังรับชม ${this.meta.title} ${this.meta.episode[this.part].title} - NAN!ME ดูอนิเมะออนไลน์`;
  }
};
</script>
