<template>
	<v-footer dark padless>
		<v-card
			flat
			tile
			class="uni-footer indigo lighten-1 white--text text-center"
		>
			<v-card-text class="white--text">
				<v-btn v-for="icon in icons" :key="icon.id" class="mx-4 white--text" icon>
					<v-icon
						size="24px"
						color="white"
						@click="transferTo(icon.url)"
						:title="icon.msg"
					>
						{{ icon.id }}
					</v-icon>
				</v-btn>
				<v-card-text>
					{{ new Date().getFullYear() }} —
					<strong>Abandon.work</strong>
				</v-card-text>
				<div>
					<a :href="beian">
						<img src="../assets/beian.png">
					</a>
					<span>津ICP备18010186号-1</span>
				</div>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	data() {
		return {
			beian:
				"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=12011202000255",
			icons: [
				{
					id: "mdi-email-outline",
					url: "mailto:xjxtju@163.com",
					msg: "mail me",
				},
				{
					id: "mdi-github-box",
					url: "https://github.com/Alfxjx",
					msg: "github",
				},
				{
					id: "mdi-coffee",
					url: "http://www.abandon.work/admin",
					msg: "admin panel",
				},
				{
					id: "mdi-code-braces",
					url: "https://github.com/Alfxjx/abandon.work",
					msg: "source code",
				},
			],
		};
	},
	methods: {
		transferTo(id) {
			window.location.href = id;
		},
	},
};
</script>

<style lang="scss" scoped>
.uni-footer {
	width: 100%;
}
</style>
