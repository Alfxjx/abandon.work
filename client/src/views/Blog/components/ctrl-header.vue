<template>
	<div class="header">
		<v-btn text>
			<a
				href="http://www.abandon.work/admin"
				target="_blank"
				rel="noopener noreferrer"
			>
				Admin
			</a>
		</v-btn>
		<v-btn text>
			<a
				href="https://github.com/Alfxjx/abandon.work"
				target="_blank"
				rel="noopener noreferrer"
			>
				Github
			</a>
		</v-btn>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>
