<template>
	<div class="http-log-list">
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
</template>

<script>
export default {
	computed: {
		httpStatus() {
			return this.$store.state.httpState;
		},
	},
};
</script>

<style lang="scss" scoped>
.http-log-wrapper {
	.log-block {
		margin: 5px;
		padding: 2px;
		border: 1px solid darkgreen;
		border-radius: 0.5em;
	}
}
</style>
