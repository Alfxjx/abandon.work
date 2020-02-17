<template>
	<div class="blog-main">
		<blog-header />
		<div class="blog-list">
			<div class="blog-wrapper" v-for="(item, index) in data" :key="index" @click="goToPage(item._id)">
				<article class="card-wrapper">
					<div class="card-header">
						<p>
              <span>作者</span>
              <span>{{ item.author }}</span>
            </p>
						<span>{{ item.date_posted }}</span>
					</div>
					<div class="title">{{ item.title }}</div>
					<div class="description">{{ item.description }}</div>
					<div class="category">{{ item.category }}</div>
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
	},
	components: {
		'blog-header': BlogHeader,
	},
};
</script>

<style lang="scss" scoped>
.blog-main{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .blog-list{
    display: flex;
    flex-wrap: wrap;
    .blog-wrapper{
      width: 20em;
      height: 15em;
      border: 1px solid #000;
      margin:10px;
      .card-wrapper{
        padding: 10px;
        .card-header{
          p{
            margin: 0;
          }
        }
        .title{
          font-size: 28px;
          font-weight: 500;
        }
        .description{}
        .category{
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
