<template>
	<div class="next-button" @click="toBlog">
		<svg
			t="1586610034947"
			class="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="1139"
			width="200"
			height="200"
		>
			<path
				d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z"
				p-id="1140"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'next-button',
	props: {},
	data() {
		return {
			scrollTop: 0,
			time: 0,
			dParams: 20,
			scrollState: 0
		};
	},
	mounted() {
		window.addEventListener('scroll', this.getScrollTop);
	},
	methods: {
		toBlog(e) {
			// this.$router.push('/blog');
			// this.$emit('blog');
			if (this.scrollState) {
				return;
			}
			this.scrollState = 1;
			e.preventDefault();
			let _this = this;
			this.time = setInterval(function() {
				_this.gotoDown(_this.scrollTop + _this.dParams);
			}, 10);
		},
		gotoDown(distance) {
			this.dParams += 20;
			let clientHeight = document.documentElement.clientHeight;
			distance = distance < clientHeight ? distance : clientHeight + 1;
			document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
			if (this.scrollTop > clientHeight) {
				clearInterval(this.time);
				this.dParams = 20;
				this.scrollState = 0;
			}
		},
		getScrollTop() {
			this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		}
	}
};
</script>

<style scoped lang="scss">
@import "../../var.scss";
.next-button {
	display: flex;
	position: absolute;
	bottom: 5%;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	background: $black;

// 3sec infinite
	animation: blink 3s infinite;
	// &:hover {
	// 	background: $yellow;
	// 	border: 1px solid $yellow;
	// 	.icon {
	// 		fill: $blue;
	// 	}
	// }
	.icon {
		width: 30px;
		height: 30px;

		fill: $yellow;
	}
}

@keyframes blink {
	50% {
		background: $yunshanlv;
	}
}
</style>
