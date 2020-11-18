<template>
  <v-app id="appp">
    <div id="app">
      <uni-header></uni-header>
      <router-view></router-view>
      <uni-footer></uni-footer>
      <scroll-top class="top"></scroll-top>
    </div>
  </v-app>
</template>

<script>
import UniHeader from "./components/uni-header.vue";
import UniFooter from "./components/uni-footer.vue";
import ScrollTop from "./components/scroll-top.vue";

export default {
  components: {
    "uni-header": UniHeader,
    "uni-footer": UniFooter,
    "scroll-top": ScrollTop,
  },
};
</script>

<style lang="scss">
@import "./styles/common.scss";
#app {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
  .top{
    position: fixed;
    bottom: 1rem;
    right: 1.5rem;
  }
}
code {
	background-color: #F8F8F8!important;
	color: #333333!important;
	padding: 0 0.5rem!important;
}
kbd {
	font-weight: 400!important;
	font-size: 100%!important;
}
</style>
