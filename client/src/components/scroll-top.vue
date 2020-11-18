<template>
	<div class="scroll-top" @click="toTop()">
		<svg
			v-show="showTop"
			t="1605670584854"
			class="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="4250"
			width="200"
			height="200"
		>
			<!-- 外圈 -->
			<path
				d="M515.953116 1016.069953c-223.232 0-404.837209-181.605209-404.837209-404.837209 0-223.232 181.605209-404.837209 404.837209-404.837209 223.232 0 404.837209 181.605209 404.83721 404.837209 0 223.232-181.605209 404.837209-404.83721 404.837209"
				fill="#576A7B"
				p-id="4251"
			></path>
			<circle></circle>
			<!-- 浅色内圈 -->
			<path
				d="M515.97693 968.442047c-196.989023 0-357.209302-160.244093-357.209302-357.209303s160.220279-357.209302 357.209302-357.209302c196.965209 0 357.209302 160.244093 357.209303 357.209302s-160.244093 357.209302-357.209303 357.209303"
				fill="#EDECED"
				p-id="4252"
			></path>
			<!-- <circle
				cx="512"
				cy="572"
				r="400"
				stroke-width="30"
				stroke="#E5E5E5"
				fill="none"
			></circle>
			<circle
				cx="512"
				cy="572"
				r="400"
				stroke-width="30"
				stroke="#506DFE"
				fill="none"
				
				stroke-dasharray="219 439"
			></circle> -->
			<!-- top btn -->
			<path
				d="M587.418791 15.883907h-142.883721a23.813953 23.813953 0 1 0 0 47.627907h23.813953v71.44186c0 26.266791 21.361116 47.627907 47.627907 47.627907 26.242977 0 47.627907-21.361116 47.627907-47.627907v-71.44186h23.813954a23.813953 23.813953 0 0 0 0-47.627907"
				fill="#576A7B"
				p-id="4253"
			></path>
			<!-- 指针 -->
			<path
				:style="{
					transform: 'rotate(' + degree + 'deg)',
					'transform-origin': '50% 60%',
				}"
				d="M539.790884 519.358512v-193.89321a23.813953 23.813953 0 1 0-47.627907 0v193.89321c-40.983814 10.644837-71.44186 47.604093-71.441861 91.874232 0 52.509767 42.722233 95.255814 95.255814 95.255814s95.255814-42.746047 95.255814-95.255814c0-44.27014-30.48186-81.229395-71.44186-91.874232z m-23.813954 139.502139c-26.266791 0-47.627907-21.361116-47.627907-47.627907s21.361116-47.627907 47.627907-47.627907c26.242977 0 47.627907 21.361116 47.627907 47.627907s-21.38493 47.627907-47.627907 47.627907z"
				fill="#5C6BC0"
				p-id="4254"
			></path>
			<!-- 右上方一个按钮 -->
			<!-- <path
				d="M849.372279 301.651349a23.79014 23.79014 0 0 1-16.836465-40.650419l47.627907-47.627907a23.79014 23.79014 0 1 1 33.67293 33.67293l-47.627907 47.627907a23.813953 23.813953 0 0 1-16.836465 6.977489"
				fill="#576A7B"
				p-id="4255"
			></path> -->
		</svg>
	</div>
</template>

<script>
export default {
	data() {
		return {
			degree: 0,
			showTop: false,
			time: 0,
			dParams: 20,
			scrollState: 0,
		};
	},
	mounted() {
		window.addEventListener("scroll", () => {
			this.degree =
				(document.documentElement.scrollTop /
					(document.body.scrollHeight - document.body.offsetHeight)) *
				360;
			this.showTop = document.documentElement.scrollTop > 1;
		});
	},
	beforDestroy() {
		window.removeEventListener("scroll");
	},
	methods: {
		toTop() {
			if (window.scrollTo) {
				window.scrollTo({ behavior: "smooth", top: 0 });
			} else {
				document.documentElement.scrollTop = 0;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.scroll-top {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4rem;
	height: 4rem;
	cursor: pointer;
	z-index: 99;
}
</style>
