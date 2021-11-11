<template>
	<div id="app">
		<the-header></the-header>
		<router-view></router-view>
		<scroll-top class="top"></scroll-top>
		<beian></beian>
	</div>
</template>

<script>
import ScrollTop from "./components/scroll-top.vue";
import TheHeader from "./components/TheHeader.vue";
import beian from "./components/Beian.vue";

export default {
	components: {
		"scroll-top": ScrollTop,
		"the-header": TheHeader,
		beian: beian,
	},
};
</script>

<style lang="scss">
@import "./styles/common.scss";
#app {
	display: flex;
	position: relative;
	flex-direction: column;
	height: 100vh;
	text-rendering: geometricPrecision;
	.top {
		position: fixed;
		bottom: 1rem;
		right: 1.5rem;
	}
}
code {
	background-color: #f8f8f8 !important;
	color: #333333 !important;
	padding: 0 0.5rem !important;
}
kbd {
	font-weight: 400 !important;
	font-size: 100% !important;
}
</style>
