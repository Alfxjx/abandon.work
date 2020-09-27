<template>
	<div class="blog-list">
		<h1 class="blog-title">abandon.work</h1>
		<div>{{ status }}</div>
		<ul class="blog-list" v-if="bloglist.length !== 0">
			<li class="blog-list-item" v-for="(item, index) in bloglist" :key="index">
				<div class="item-title">
					<p>{{ item.title }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { getBlogList } from '../../http/request.js';
export default {
	name: 'blog-list',
	components: {},
	props: {},
	data() {
		return {
			bloglist: {},
			status: '',
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
@import '../../styles/var.scss';
// TODO cannot import this font ttf file
// @import '../../styles/font.scss';
.blog-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	.blog-title {
		font-family: 'BETTALIA';
		color: $blue;
	}
}
@font-face {
	src: url('../../assets/font/BETTALIA.ttf');
	font-family: 'BETTALIA';
}
</style>
