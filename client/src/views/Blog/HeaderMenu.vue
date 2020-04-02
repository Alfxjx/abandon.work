<template>
	<div class="header-menu" @click="show()">
		<div class="line">
			<div class="line sub-line-top" :class="{ 'active-top': unshowDiv }" />
			<div class="line sub-line-bot" :class="{ 'active-bot': unshowDiv }" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'header-menu',
	props: {},
	data() {
		return {
      // true则收起面包
			unshowDiv: false,
		};
	},
	created() {},
	mounted() {},
	computed: {},
	methods: {
		show() {
			this.unshowDiv = !this.unshowDiv;
		},
	},
	watch: {},
	components: {},
};
</script>

<style scoped lang="scss">
.header-menu {
	padding: 0 0 0 1em;
	width: 2em;
	height: 2em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.line {
		width: 30px;
		height: 4px;
		background: #000;
		border-radius: 2px;
		position: relative;
	}
	.sub-line-top {
		background: #f22;
		position: absolute;
		top: 0;
		left: 0;
		transform: translate(0, -10px);
		transition: transform 0.5s;
		&.active-top {
			transform: translate(0, 0);
		}
	}
	.sub-line-bot {
		background: #22e;
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translate(0, 10px);
		transition: transform 0.5s;
		&.active-bot {
			transform: translate(0, 0);
		}
	}
}
</style>
