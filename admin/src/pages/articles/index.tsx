import React from 'react';
import ArticlesTable from './components/ArticlesTable';
import CreateArticle from './components/CreateArticle';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import { Menu } from "antd";

interface IProp {

}

interface IState {
	current: string
}

class Articles extends React.Component<IProp, IState>{
	// constructor(props: IProp) {
	// 	super(props);
	// }
	// state = {
	// 	current: 'table'
	// };

	handleClick(e:any) {
		console.log('click ', e);
		this.setState({ current: e.key });
	}

	render() {
		// const { current } = this.state;
		return (
			<div>
				<Menu mode="horizontal">
					<Menu.Item key="table"><Link to='/articles'>文章列表</Link></Menu.Item>
					<Menu.Item key="edit"><Link to='/articles/edit'>创建新文章</Link></Menu.Item>
				</Menu>
				<HashRouter>
					<Switch>
						<Route exact path="/articles/" component={ArticlesTable} />
						<Route exact path="/articles/edit" component={CreateArticle} />
					</Switch>
				</HashRouter>
			</div>
		)
	}
}

export default Articles;
