<template>
	<div class="blog-main">
		<!-- <blog-header /> -->
		<div class="blog-list">
			<div
				class="blog-wrapper"
				v-for="(item, index) in data"
				:key="index"
				@click="goToPage(item._id)"
				:style="{ backgroundImage: `url(${item.picture})` }"
			>
				<article class="card-wrapper">
					<div class="title">{{ item.title }}</div>
					<div class="card-header">
						<p>
							<span>作者</span>
							<span>{{ item.author }}</span>
						</p>
						<span>{{ item.date_posted }}</span>
					</div>
					<div class="description">{{ item.description }}</div>
					<div class="pormote" v-show="item.promote === true">推荐</div>
					<div class="category" @click.stop="showCate()">cate {{ item.category }}</div>
				</article>
			</div>
		</div>
		<div class="category">
			<span>{{ home }}</span>
		</div>
	</div>
</template>

<script>
// import BlogHeader from './BlogHeader.vue';
export default {
	// style from
	// TODO https://www.darmau.com/
	data() {
		return {
			home: '',
			data: {}
		};
	},
	mounted() {
		this.getData();
	},

	methods: {
		getData() {
			// TODO server的api记得把列表和详情分开
			this.$get('getBlogListApi').then(res => {
				this.data = res.data;
			});
		},
		goToPage(id) {
			// console.log(id);
			this.$router.push(`/${id}`);
		},
		showCate() {
			console.log('go category');
		}
	},
	// components: {
	// 	'blog-header': BlogHeader
	// }
};
</script>

<style lang="scss" scoped>
@import "../../var.scss";
$border: 1rem;
.blog-main {
	// height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	.blog-list {
		display: flex;
		flex-wrap: wrap;
		padding-top: 20px;
		.blog-wrapper {
			display: flex;
			position: relative;
			flex-direction: column;
			align-items: flex-start;
			margin: 10px;
			padding: 20px;

// border: 1px solid #777;
			border-radius: $border;
			width: 18rem;
			height: 12rem;
			background-size: 100% 100%;
			color: $white;
			&::before {
				position: absolute;
				left: 0;
				top: 0;
				border-radius: $border;
				width: 100%;
				height: 100%;
				background-image: linear-gradient(234deg, #394245, #000);
				opacity: .4;
				content: "";
			}
			.card-wrapper {
				display: flex;
				position: relative;
				flex-direction: column;
				width: 100%;
				height: 100%;
				cursor: pointer;
				.title {
					margin: 30px 0;
					font-weight: 500;
					font-size: 28px;
				}
				.card-header {
					display: flex;
					flex-direction: row;
					p {
						margin: 0;
						padding: 0 10px 0 0;
					}
				}
				.description {
					margin-top: 10px;
				}
				.category {
					position: absolute;
					left: 0;
					bottom: -8px;
					padding: 0 5px;
					border-radius: 10px;
					height: 20px;
					line-height: 20px;
					font-weight: 500;
					font-size: 14px;
					&:hover {
						background: #fff;
						color: #000;
					}
				}
			}
		}
	}
}
</style>
