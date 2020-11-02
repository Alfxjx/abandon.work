<template>
  <div class="blog-content-wrapper" v-if="blog !== null">
    <div class="blog-title">
      <h1>{{ blog.title }}</h1>
    </div>
    <div class="blog-content">
      <div id="blogcontent" v-html="dangerouslySetInnerHTML" />
    </div>
  </div>
</template>

<script>
import { getBlogById } from "../../http/request.js";
import marked from "marked";
export default {
  props: ["id"],
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    dangerouslySetInnerHTML() {
      if (this.blog.body) {
        return marked(this.blog.body);
      } else {
        return "";
      }
    },
  },
  methods: {
    getData() {
      getBlogById(this.id).then((res) => {
        this.blog = res.data;
        this.markdown();
      });
    },
    markdown() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        smartLists: true,
        smartypants: false,
      });
    },
  },
};
</script>

<style lang="scss">
.blog-content-wrapper {
  padding: 1rem;
  .blog-title {
    padding-top: 3rem;
  }
}
</style>
