<template>
	<div class="blog-list-wrapper">
		<ul class="blog-list" v-if="bloglist.length !== 0">
			<li class="blog-list-item" v-for="(item, index) in bloglist" :key="index">
				<div class="item-info">
					<span>{{ item.author }}</span>
					<span>{{ item.date_posted }}</span>
					<span>{{ item.tags }}</span>
					<span>{{ item.promote ? "推荐" : "一般" }}</span>
				</div>
				<div class="item-bot" @click="goDetails(item._id)">
					<div class="item-img" v-if="item.picture">
						<img :src="item.picture" alt="title" />
					</div>
					<div class="item-title">
						<p>{{ item.title }}</p>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { getBlogList } from "../../http/request.js";

export default {
	name: "blog-list",
	props: {},
	data() {
		return {
			bloglist: {},
			status: "",
		};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			getBlogList().then((res) => {
				this.bloglist = res.data;
				this.status = res.status;
				console.log(this.bloglist);
			});
		},
		goDetails(id) {
			this.$router.push(`/blog/${id}`);
		},
	},
};
</script>

<style scoped lang="scss">
// @import '../../styles/font.scss';
.blog-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	margin: 0 3em;
	.blog-list-item {
		display: flex;
		flex-direction: column;
		margin: 1rem 0;
		border-bottom: 1px solid #777;
		width: 75vw;
		min-width: 350px;
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
}
</style>
