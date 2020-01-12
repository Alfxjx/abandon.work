<template>
	<div class="content-wrapper">
		<div>
			<div>{{ content.title }}</div>
			<div>
				<span>{{ content.author }}</span>
				<span>{{ content.date_posted }}</span>
			</div>
			<div>{{ content.body }}</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			content: {},
		};
	},
	mounted() {
		this.getContentPage();
	},
	computed: {},
	methods: {
		getContentPage() {
			let id = this.$route.params.id;
			this.$get('getBlogPageApi', null, id).then(res => {
				this.content = res.data;
			});
		},
	},
	watch: {},
	components: {},
};
</script>

<style scoped lang="scss">
.content-wrapper {
}
</style>
