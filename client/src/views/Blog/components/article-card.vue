<template>
  <div class="article-card">
    <div class="item-bot" @click="goDetails(item._id)">
      <!-- <div class="item-img" v-if="item.picture">
        <img :src="item.picture" alt="title" height="200px" width="300px" />
      </div> -->
      <div class="item-title">
        <div>{{ item.title }}</div>
        <!-- <div>{{ item.description }}</div> -->
      </div>
    </div>
    <!-- <div class="item-info">
      <span>{{ item.author }}</span>
      <span>{{ item.date_posted | dateFilter }}</span>
      <span>{{ item.tags }}</span>
      <span>{{ item.promote ? "推荐" : "一般" }}</span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    goDetails(id) {
      this.$router.push(`/blog/${id}`);
    },
  },
  filters: {
    dateFilter: function(val) {
      let date = new Date(val);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
  },
};
</script>

<style lang="scss">
.article-card {
  width: 45rem;
  display: flex;
  flex-direction: column;
  font-family: ColaCare, Menlo, "Meslo LG", monospace;
  font-size: 1.25rem;
  .item-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .item-bot {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    .item-img > img {
      width: 150px;
      height: 100px;
    }
    .item-title {
      flex: 1;
    }
  }
}

@font-face {
    src: url("../../../assets/font/ColaCare.TTF");
    font-family: "ColaCare";
}

@media (max-width: 960px) {
  .article-card {
    width: 40rem;
  }
}

@media (max-width: 720px) {
  .article-card {
    width: 30rem;
  }
}

@media (max-width: 500px) {
  .article-card {
    width: 20rem;
    .item-bot {
      flex-direction: column;
    }
  }
}
</style>
