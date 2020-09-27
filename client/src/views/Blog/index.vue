<template>
	<div class="blog-list">
		<h1 class="blog-title">abandon.work</h1>
		<ul class="blog-list" v-if="bloglist.length !== 0">
			<li
				class="blog-list-item"
				v-for="(item, index) in bloglist"
				:key="index"
			>
				<div class="item-info">
					<span>{{ item.author }}</span>
					<span>{{ item.date_posted }}</span>
					<span>{{ item.tags }}</span>
					<span>{{ item.promote ? "推荐" : "一般" }}</span>
				</div>
				<div class="item-bot" @click="goDetails(item._id)">
					<img :src="item.picture" alt="title" />
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
	components: {},
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
@import "../../styles/var.scss";
// TODO cannot import this font ttf file
// @import '../../styles/font.scss';
.blog-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	.blog-title {
		font-family: "BETTALIA";
		color: $blue;
	}
	.blog-list-item {
		display: flex;
		flex-direction: column;
		border: 1px solid #e2e5e7;
		box-shadow: 0 10px 5px -5px #777;
		.item-info {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
		.item-bot {
			display: flex;
			flex-direction: row;
			cursor: pointer;
			img {
				width: 150px;
				height: 100px;
			}
			.item-title {
				flex: 1;
			}
		}
	}
}
@font-face {
	src: url("../../assets/font/BETTALIA.ttf");
	font-family: "BETTALIA";
}
</style>
