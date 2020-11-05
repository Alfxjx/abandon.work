<template>
  <v-card class="article-card" elevation="2">
    <div class="item-bot" @click="goDetails(item._id)">
      <div class="item-img" v-if="item.picture">
        <v-img :src="item.picture" alt="title" height="200px" width="300px" />
      </div>
      <div class="item-title">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>{{ item.description }}</v-card-text>
      </div>
    </div>
    <div class="item-info">
      <span>{{ item.author }}</span>
      <span>{{ item.date_posted | dateFilter }}</span>
      <span>{{ item.tags }}</span>
      <span>{{ item.promote ? "推荐" : "一般" }}</span>
    </div>
  </v-card>
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
