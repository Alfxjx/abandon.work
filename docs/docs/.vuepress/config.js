module.exports = {
	title: 'Blog of Blog',
	description: 'personal full stack blog',
	themeConfig: {
    lastUpdated: 'Last Updated',
    sidebarDepth:2,
    sidebar: {
      '/design/':[''],
      '/dev/':['','client','server']
    },
    smoothScroll: true,
    nav:[
      {text:'Design',link:'/design/'},
      {text:'Dev',link:'/dev/'},
      {text:'About',link:'/about'},
      {text:'Page',link:'http://www.abandon.work'}
    ]
	},
};
