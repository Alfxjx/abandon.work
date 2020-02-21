<template>
	<div class="blog-main">
		<blog-header />
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
          <div class="pormote" v-show="item.promote==true">推荐</div>
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
import BlogHeader from './BlogHeader.vue';
export default {
	// style from
	// TODO https://www.darmau.com/
	data() {
		return {
			home: '',
			data: {},
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
			this.$router.push(`/blog/${id}`);
		},
		showCate() {
			console.log('go category');
		},
	},
	components: {
		'blog-header': BlogHeader,
	},
};
</script>

<style lang="scss" scoped>
@import '../../var.scss';
.blog-main {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	.blog-list {
		display: flex;
		flex-wrap: wrap;
		.blog-wrapper {
      color: $incard-color;
      position: relative;
			width: 18em;
			height: 14em;
			border: 1px solid #777;
			border-radius: 10px;
			margin: 10px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 20px;
			&::before {
        position: absolute;
        top: 0;
        left: 0;
				width: 100%;
				height: 100%;
				content: '';
				opacity: 0.4;
				background-image: linear-gradient(234deg, #394245, #000);
			}
			.card-wrapper {
				cursor: pointer;
				position: relative;
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
				.title {
					margin: 30px 0;
					font-size: 28px;
					font-weight: 500;
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
					bottom: 5px;
					height: 20px;
					font-size: 14px;
					font-weight: 500;
					line-height: 20px;
					padding: 0 5px;
					border-radius: 10px;
					&:hover {
						color: #000;
						background: #fff;
					}
				}
			}
		}
	}
}
</style>
