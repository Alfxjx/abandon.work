<template>
	<div class="main">
		<div
			class="bg-image"
			v-if="bingList[0] !== undefined"
			:style="{ backgroundImage: `url('${bingList[0].link}')` }"
		/>
		<div v-else class="bg-image" />
		<div class="header">
			<!-- <span class="header-title">Alfxjx</span> -->
			<span class="header-title">
				<router-link to="/test">Alfxjx</router-link>
			</span>
			<a class="header-title blog" @click="toBlog">Blog</a>
		</div>
		<p class="title">Abandon<a href="https://alfxjx.github.io/">.</a>work</p>
		<h3 class="hint">
			<span>still under construction…</span>
			<!-- <a href="https://alfxjx.github.io/">技术博客</a> -->
		</h3>
		<div class="links">
			<a href="http://www.github.com/alfxjx" title="GitHub">
				<svg
					t="1576684066776"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="2856"
					width="32"
					height="32"
				>
					<path
						d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z"
						p-id="2857"
					/>
				</svg>
			</a>
			<a href="https://leetcode-cn.com/u/bmwh123/" title="LeetCode">
				<svg
					t="1576684199638"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="5572"
					width="32"
					height="32"
				>
					<path
						d="M928 960h-64v64h64c54.4 0 96-41.6 96-96s-41.6-96-96-96c-19.2 0-32-12.8-32-32s12.8-32 32-32h64v-64h-64c-54.4 0-96 41.6-96 96s41.6 96 96 96c19.2 0 32 12.8 32 32s-12.8 32-32 32zM576 864v64c0 51.2 41.6 96 96 96s96-41.6 96-96v-160h32v-64h-128v64h32v160c0 16-12.8 32-32 32-16 0-32-12.8-32-32v-64h-64z"
						p-id="5573"
					/>
					<path d="M512 960H64V256h896v384h64V0H0v1024h512v-64zM64 64h896v128H64V64z" p-id="5574" />
					<path d="M128 96h64v64H128zM256 96h64v64H256zM384 96h64v64h-64z" p-id="5575" />
				</svg>
			</a>
			<a href="https://juejin.im/user/5bb5eb00e51d453eb93d896d" title="JueJin">
				<svg
					t="1576684090766"
					class="icon"
					viewBox="0 0 1212 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="3652"
					width="32"
					height="32"
				>
					<path
						d="M600.737684 204.341895L512.458105 134.736842l-92.213894 72.730947-4.796632 3.853474 97.010526 77.338948 97.333895-77.338948-9.054316-6.979368z m334.551579 269.958737l-423.073684 333.608421-422.804211-333.41979L26.947368 524.665263l485.268211 382.625684 485.537684-382.841263-62.464-50.149052z m-423.073684 27.055157l-230.238316-181.517473-62.437052 50.149052 292.648421 230.777264 292.944842-230.992843-62.437053-50.149052-230.480842 181.733052z"
						p-id="3653"
					/>
				</svg>
			</a>
		</div>
		<footer>
			<a :href="bLink">津ICP备18010186号-2</a>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bLink:
				'http://beian.miit.gov.cn/state/outPortal/loginPortal.action;jsessionid=DrxR3OxDGC8VTtP-_wvcUeo-TYg1YOL3qZJsAAFdyFhTZHrpC436!-1430904473',
			bingList: [],
		};
	},
	mounted() {
		this._getBingList();
	},
	methods: {
		toBlog() {
			this.$router.push('/blog');
		},
		_getBingList() {
			this.$get('getBingBGListApi').then(res => {
				this.bingList = res.data;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../var.scss';
$footer-height: 30px;
.main {
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
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
			color: $font-color;
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
				color: $hover-color;
				background: $hover-bg;
			}
		}
	}
	footer {
		position: absolute;
		left: 0;
		bottom: 10px;
		width: 100%;
		height: $footer-height;
		display: flex;
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
	color: $font-color;
}
.hint {
  color: $font-color;
	font-family: sans-serif;
}
.bg-image {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -10;
	// zoom: 1;
	// background-image: url('../assets/111.jpg');
	// background-color: #777;
	// background-repeat: no-repeat;
	// background-size: 100% 100%;
	background: url('../assets/111.jpg') no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
.links {
	margin-top: 10px;
	width: 300px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
a {
	text-decoration: none;
	color: $font-color;
}
a:visited {
	color: $font-color;
}
a:hover {
	color: $hover-color;
}

@font-face {
	font-family: 'BETTALIA';
	src: url('../assets/font/BETTALIA.ttf');
}
.icon:hover {
	fill: $hover-color;
}
.icon {
	fill: $font-color;
}
</style>
