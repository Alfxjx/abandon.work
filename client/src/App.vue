<template>
	<v-app>
		<div id="app">
			<span class="blog-title" @click="goHome()">abandon.work</span>
			<router-view></router-view>
		</div>
	</v-app>
</template>

<script>
export default {
	methods: {
		goHome() {
			// console.log(this.$route.path)
			if (this.$route.path !== "/") {
				this.$router.push("/");
			}
		},
	},
};
</script>

<style lang="scss">
@import "./styles/var.scss";
@import "./styles/common.scss";
#app {
	display: flex;
	position: relative;
	flex-direction: row;
	height: 100vh;
	.blog-title {
		position: absolute;
		left: 0;
		top: 0;
		width: 200px;
		background: #fff;
		cursor: pointer;
		line-height: 50px;
		text-align: center;
		font-size: 1.5rem;
		font-family: "BETTALIA";
		color: $blue;
	}
}

@font-face {
	src: url("./assets/font/BETTALIA.ttf");
	font-family: "BETTALIA";
}
</style>
