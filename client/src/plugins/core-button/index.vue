<template>
	<div class="core-btn" @click="showDetail">
		<div class="btn">?</div>
        <div class="btn-list" v-show="showDetailFlag">
			<span>1</span>
			<span>1</span>
			<span>1</span>
			<span>1</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showDetailFlag: false,
		};
	},
	methods: {
		showDetail() {
			this.showDetailFlag = !this.showDetailFlag;
		},
	},
};
</script>

<style lang="scss" scoped>
.core-btn {
	display: flex;
	position: absolute;
	right: 50px;
	bottom: 100px;
	justify-content: center;
	align-items: center;
	border: 1px solid #e39;
	border-radius: 100%;
	width: 2rem;
	height: 2rem;
	line-height: 2rem;
    font-size: 1.5rem;
    .btn{
        color: #e39;
    }
    .btn-list{
        position: absolute;
        top: 2rem;
    }
}
</style>
