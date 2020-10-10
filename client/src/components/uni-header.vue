<template>
	<div>
		<v-app-bar elevate-on-scroll fixed dense>
			<v-app-bar-nav-icon>
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			</v-app-bar-nav-icon>

			<v-toolbar-title class="blog-title" @click="goHome()">
				abandon.work
			</v-toolbar-title>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group
					v-model="group"
					active-class="deep-purple--text text--accent-4"
				>
					<v-list-item>
						<v-list-item-title>
							<router-link class="router-link" to="/">主页</router-link>
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title>
							<router-link class="router-link" to="/about">关于我</router-link>
						</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			indigo: "#5c6bc0",
			drawer: false,
			group: null,
		};
	},
	methods: {
		goHome() {
			// console.log(this.$route.path)
			if (this.$route.path !== "/") {
				this.$router.push("/");
			}
		},
	},
	watch: {
		group() {
			this.drawer = false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../styles/var.scss";
.blog-title {
	font-size: 1.5rem;
	font-family: "open sans";
	color: $indigo;
}
.router-link {
	text-decoration: none;
}
@font-face {
	src: url("../assets/font/BETTALIA.ttf");
	font-family: "BETTALIA";
}
@font-face {
	src: url("../assets/font/Open-Sans-2.ttf");
	font-family: "open sans";
}
</style>
