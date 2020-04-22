<template>
	<div class="main" v-if="bingList[0] !== undefined">
		<div class="blog-wrapper">
			<div v-show="showBg" class="main-part" :style="{ backgroundImage: `url('${bingList[bgIndex].link}')` }">
				<div class="header">
					<span class="header-title">
						<router-link to="/about">Alfxjx</router-link>
					</span>
					<a class="header-title blog" @click="showAnotherBg()">Shift</a>
				</div>
				<p class="title">Abandon<a href="https://alfxjx.github.io/">.</a>work</p>
				<h3 class="hint">
					<span>still under construction…</span>
				</h3>
				<NextButton />
			</div>
			<Blog />
		</div>
		<footer>
			<LinkPart />
			<a href="http://beian.miit.gov.cn" target="_blank">ICP备18010186号-2</a>
		</footer>
	</div>
</template>

<script>
import LinkPart from './LinkPart.vue';
import NextButton from './NextButton.vue';
import Blog from '../Blog/Blog.vue';
export default {
	data() {
		return {
			bingList: [],
			bgIndex: 8,
			showBg: true,
		};
	},
	mounted() {
		// document.documentElement.scrollTop = 0;
		this._getBingList();
	},
	methods: {
		_getBingList() {
			this.$get('getBingBGListApi').then((res) => {
				this.bingList = res.data;
				console.log(this.bingList);
			});
		},
		// @click="showAnotherBg()"
		showAnotherBg() {
			console.log(this.bgIndex);
			if (this.bgIndex >= this.bingList.length - 1) {
				this.bgIndex = 0;
			} else {
				this.bgIndex += 1;
			}
		},
		// hideBg() {
		// 	let time;
		// 	clearTimeout(time);
		// 	time = setTimeout(() => {
		// 		console.log('123');
		// 		this.showBg = !this.showBg;
		// 	}, 5000);
		// }
	},
	components: {
		LinkPart,
		NextButton,
		Blog,
	},
};
</script>

<style lang="scss" scoped>
@import '../../var.scss';
$footer-height: 30px;
.main {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	transition: scrollTop 1s ease;
	.blog-wrapper {
		.main-part {
			position: relative;
			// flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100vh;
			.header {
				width: 100%;
				height: 60px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.header-title {
					font-family: 'BETTALIA';
					height: 40px;
					line-height: 40px;
					color: $grey-white;
					font-size: 22px;
					font-weight: 600;
					margin: 10px 25px;
				}
				.blog {
					width: 75px;
					text-align: center;
					border-radius: 20px;
					background: #222;
					&:hover {
						cursor: pointer;
						color: $blue;
						background: $yellow;
					}
				}
			}
		}
	}
	footer {
		flex: 0 0 100px;
		width: 100%;
		height: $footer-height;
		background: $yunshanlv;
		color: $minghui;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}
.title {
	margin-bottom: 10px;
	padding-top: 2em;
	font-weight: 700;
	font-family: 'BETTALIA', sans-serif;
	font-size: 4em;
	color: $grey-white;
}
.hint {
	color: $grey-white;
	font-family: sans-serif;
}
a {
	text-decoration: none;
	color: $grey-white;
}
a:visited {
	color: $grey-white;
}
a:hover {
	color: $blue;
}

@font-face {
	font-family: 'BETTALIA';
	src: url('../../assets/font/BETTALIA.ttf');
}
.icon:hover {
	fill: $blue;
}
.icon {
	fill: $blue;
}
</style>
