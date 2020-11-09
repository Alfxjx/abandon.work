<template>
  <div class="blog-content-wrapper" v-if="blog !== null">
    <div class="content">
      <div class="blog-title">
        <h1>{{ blog.title }}</h1>
      </div>
      <div class="blog-content">
        <div
          ref="blogcontent"
          id="blogcontent"
          v-html="dangerouslySetInnerHTML"
          v-highlight
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getBlogById } from "@/http/request.js";
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
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
      });
    },
  },
};
</script>

<style lang="scss">
// marked 解析之后目前不在这个页面里面，所以不能加上scoped
.blog-content-wrapper {
  padding: 1rem;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
    .blog-title {
      padding-top: 3rem;
      h1 {
        @media screen and (max-width: 640px) {
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
    }
    .blog-content {
      width: 100%;
      @media screen and (max-width: 900px) {
        padding: 0 1rem;
      }
      padding: 0 4rem;
      #blogcontent {
        width: 100%;
      }
    }
  }
}
p > img {
  width: 50%;
  position: relative;
  left: 50%;
  margin-left: -25%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 900px) {
    width: 80%;
    left: 50%;
    margin-left: -40%;
  }
}
pre > code {
  margin: 1rem 0;
  padding: 1rem !important;
}
h2 {
  padding: 0.5rem 0;
}
hr {
  margin: 0.5rem 0;
  border: none;
  border-top: 1px dashed #5c6bc0;
}
blockquote {
  border-left: 10px solid #5c6bc0;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  margin: 1rem 0;
  padding-left: 10px;
  ul{
    padding: 0!important;
  }
  @media screen and (max-width: 640px) {
    font-size: 0.75rem;
  }
}
</style>
