<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index" @click="goToPage(item._id)">
        <div class="card-header">
          <span>{{ item.author }}</span>
          <span>{{ item.date_posted }}</span>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="description">{{ item.description }}</div>
      </li>
    </ul>
    <div class="category">
      <span>{{ home }}</span>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			home: '',
			data: {},
		};
	},
	mounted() {
		this.getData();
	},

	methods: {
		getData() {
			// TODO server的api记得把列表和详情分开
			this.$get('getBlogListApi').then(res => {
				this.data = res.data;
			});
		},
		goToPage(id) {
      console.log(id);
      this.$router.push(`/blog/${id}`)
		},
	},
};
</script>

<style lang="scss" scoped></style>
