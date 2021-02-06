<template>
	<div>
		<v-app-bar elevate-on-scroll fixed dense>
			<v-app-bar-nav-icon>
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			</v-app-bar-nav-icon>

			<v-toolbar-title class="blog-title" @click="goto('/')">
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
						<v-list-item-title @click="goto('/')">
							主页
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title @click="goto('/about')">
							关于我
						</v-list-item-title>
					</v-list-item>
					<v-list-item>
						<v-list-item-title @click="goto('/todo')">
							TODO list
						</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<v-snackbar v-model="snackbar">
			{{ text }}
			<template v-slot:action="{ attrs }">
				<v-btn
					color="indigo"
					text
					v-bind="attrs"
					@click="snackbar = false"
					:timeout="2200"
				>
					退下
				</v-btn>
			</template>
		</v-snackbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			indigo: "#5c6bc0",
			drawer: false,
			group: null,
			snackbar: false,
			text: "憋点了，现在就是这个路由",
		};
	},
	methods: {
		goHome() {
			// console.log(this.$route.path)
			if (this.$route.path !== "/") {
				this.$router.push("/");
			}
		},
		goto(url) {
			if (this.$route.path !== url) {
				this.$router.push(url);
			} else {
				this.snackbar = true;
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
	// font-family: "open sans";
	font-family: "CyberPunk", "Pirata One", Arial;
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
@font-face {
	src: url("../assets/font/PirataOne.ttf");
	font-family: "Pirata One";
}
@font-face {
	src: url("../assets/font/Cyberpunk.ttf");
	font-family: "CyberPunk";
}
</style>
