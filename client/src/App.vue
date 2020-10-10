<template>
	<v-app>
		<div id="app">
			<uni-header></uni-header>
			<router-view></router-view>
			<uni-footer></uni-footer>
		</div>
	</v-app>
</template>

<script>
import UniHeader from "./components/uni-header.vue";
import UniFooter from "./components/uni-footer.vue";
export default {
	components: {
		"uni-header": UniHeader,
		"uni-footer": UniFooter,
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
}
</style>
