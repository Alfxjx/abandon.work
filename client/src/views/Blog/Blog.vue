<template>
  <div>
    <div class="category">
      <span>{{ home }}</span>
      <router-link to="/blog/tech">Work</router-link>
      <router-link to="/blog/life">Life</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { uniformRequest } from "../../http/api";
// import axios from "axios";
export default {
  data() {
    return {
      home: ""
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      console.log(process.env.NODE_ENV);
      // axios.get("/api/blog/posts").then(res => {
      //   this.home = res;
      // });
      uniformRequest({ method: "get", url: "getHomeApi" }).then(res => {
        this.home = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
