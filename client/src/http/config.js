// 对api在本文件中进行管理，配置开发环境访问的mock数据，
const ApiConfig = {
	getBlogListApi: {
		development: 'getBlogList.json',
		production: '/api/blog',
	},
	getBlogPageApi: {
		development: 'getBlogPage.json',
		production: '/api/blog/',
	},
	getBingBGListApi: {
		development: '',
		production: '/api/juhe/bing?sort=1',
	},
};

export default ApiConfig;
