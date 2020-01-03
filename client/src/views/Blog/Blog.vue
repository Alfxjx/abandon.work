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
import { uniformRequest, getJuejinLikeList } from "../../http/api";
export default {
  data() {
    return {
      home: ""
    };
  },
  mounted() {
    this.getData();
    this.getJuejinData();
  },

  methods: {
    getData() {
      uniformRequest({ method: "get", url: "getHomeApi" }).then(res => {
        this.home = res;
      });
    },
    getJuejinData() {
      getJuejinLikeList(0).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
