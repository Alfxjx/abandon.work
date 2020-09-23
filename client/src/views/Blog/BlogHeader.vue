<template>
	<div class="blog-header">
		<header-menu />
		<section class="blog-section blog-func">
			<div class="archive">存档</div>
			<div class="about">关于</div>
		</section>
		<section class="float-right blog-section">
			<div class="user-login">登录</div>
			<div class="admin">管理</div>
		</section>
	</div>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
export default {
	name: 'blog-header',
	props: {},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	computed: {},
	methods: {},
	watch: {},
	components: { HeaderMenu },
};
</script>

<style scoped lang="scss">
.blog-header {
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
	flex-direction: row;
	align-items: center;
	padding: 0;
	width: 100vw;
	height: 60px;
	background: #fff;
	box-shadow: 0 1px 0 0 rgba(0, 0, 0, .1);
	font-size: 1.1em;
	.blog-section {
		display: flex;
		flex-direction: row;
	}
	.blog-func {
		margin: 0 0 0 2em;
		.about {
			margin: 0 0 0 .5em;
		}
	}
	.float-right {
		position: absolute;
		right: 1.07%;
		top: 50%;
		transform: translate(0, -50%);
		.admin {
			margin: 0 0 0 .5em;
		}
	}
}
</style>
