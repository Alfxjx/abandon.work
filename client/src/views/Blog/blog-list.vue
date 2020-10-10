<template>
	<div class="blog-list-wrapper">
		<ul class="blog-list" v-if="bloglist.length !== 0">
			<li class="blog-list-item" v-for="(item, index) in bloglist" :key="index">
				<article-card :item="item"></article-card>
			</li>
		</ul>
	</div>
</template>

<script>
import { getBlogList } from "../../http/request.js";
import ArticleCard from "./components/article-card.vue";

export default {
	name: "blog-list",
	props: {},
	components: {
		"article-card": ArticleCard,
	},
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
	},
};
</script>

<style scoped lang="scss">
@import "@/styles/var.scss";
.blog-list-wrapper {
	padding-top: 50px;
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
			// border-bottom: 1px solid $blue;
			// width: 75vw;
			// min-width: 350px;
		}
	}
}
</style>
