<template>
	<div id="app">
		<div class="side-bar">
			<div class="header">
				<a
					href="http://www.abandon.work/admin"
					target="_blank"
					rel="noopener noreferrer"
				>
					Admin
				</a>
				<a
					href="https://github.com/Alfxjx/abandon.work"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
			</div>
			<span class="blog-title" @click="goHome()">abandon.work</span>
			<div
				class="http-log-wrapper"
				v-for="(item, index) in httpStatus"
				:key="index"
			>
				<div>
					<div class="log-block request-log" v-if="item.type === 'request'">
						<div class="log-date"></div>
						<div class="log-ctx overflow" :title="item.url">
							<span>{{ item.method.toUpperCase() }} </span>
							<span>{{ item.url }} </span>
						</div>
					</div>
					<div class="log-block response-log" v-else>
						<div class="log-date"></div>
						<div class="log-ctx">
							<span style="color:green">{{ item.status }} </span>
							<span>{{ item.statusText }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="router-wrapper">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		httpStatus() {
			return this.$store.state.httpState;
		},
	},
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

<style lang="scss" scoped>
@import "./styles/var.scss";
#app {
	display: flex;
	position: relative;
	flex-direction: row;
	height: 100vh;
	.side-bar {
		overflow-x: hidden;
		overflow-y: scroll;
		padding: 50px 0 0 0;
		width: 200px;
		border-right: 1px solid #000;
		&::-webkit-scrollbar {
			display: none;
		}
		.header {
			position: absolute;
			left: 0;
			bottom: 0;
			padding: 1rem 0;
			width: 200px;
			height: 1rem;
			background: #fff;
			text-align: center;
			a {
				margin-right: 1rem;
			}
		}
		.http-log-wrapper {
			.log-block {
				margin: 5px;
				padding: 2px;
				border: 1px solid darkgreen;
				border-radius: 0.5em;
			}
		}
	}
	.router-wrapper {
		overflow-x: hidden;
		overflow-y: scroll;
		flex: 1;
		height: 100vh;
	}
}
.overflow {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
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
@font-face {
	src: url("./assets/font/BETTALIA.ttf");
	font-family: "BETTALIA";
}
</style>
