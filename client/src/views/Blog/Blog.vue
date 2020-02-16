<template>
	<div>
		<blog-header />
		<ul>
			<li v-for="(item, index) in data" :key="index" @click="goToPage(item._id)">
				<div class="card-header">
					<span>{{ item.author }}</span>
					<span>{{ item.date_posted }}</span>
				</div>
				<div class="title">{{ item.title }}</div>
				<div class="description">{{ item.description }}</div>
				<div class="category">{{ item.category }}</div>
			</li>
		</ul>
		<div class="category">
			<span>{{ home }}</span>
		</div>
	</div>
</template>

<script>
import BlogHeader from './BlogHeader.vue';
export default {
	// style from
	// TODO https://www.darmau.com/
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
			// console.log(id);
			this.$router.push(`/blog/${id}`);
		},
	},
	components: {
		'blog-header': BlogHeader,
	},
};
</script>

<style lang="scss" scoped></style>
