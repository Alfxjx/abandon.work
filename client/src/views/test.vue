<template>
	<div class="test">
		<p>test</p>
		<div class="flictiy-wrapper">
			<flickity ref="flickity" :options="flickityOptions">
				<div class="carousel-cell">1</div>
				<div class="carousel-cell">2</div>
				<div class="carousel-cell">3</div>
				<div class="carousel-cell">4</div>
				<div class="carousel-cell">5</div>
			</flickity>
		</div>
		<button @click="previous()">Custom Previous Button</button>
		<button @click="next()">Custom Next Button</button>
	</div>
</template>

<script>
import Flickity from 'vue-flickity';
export default {
	name: 'test',
	props: {},
	data() {
		return {
			flickityOptions: {
				initialIndex: 2,
				prevNextButtons: false,
				pageDots: true,
				wrapAround: true,
				// any options from Flickity can be used
			},
		};
	},
	created() {},
	mounted() {},
	computed: {},
	methods: {
		next() {
			this.$refs.flickity.next();
		},
		previous() {
			this.$refs.flickity.previous();
		},
	},
	watch: {},
	components: {
		Flickity,
	},
};
</script>

<style scoped lang="scss">
.test {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.flictiy-wrapper {
	width: 200px;
	height: 150px;
  margin-bottom: 30px;
}
.carousel-cell {
	width: 200px;
	height: 150px;
	background: rgb(218, 166, 166);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
