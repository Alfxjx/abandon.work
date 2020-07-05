import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Articles from './pages/articles/index';
import Juhe from './pages/juhe/index';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed: boolean) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		return (
			<HashRouter>
				<div className="App">
					<Layout style={{ minHeight: '100vh' }}>
						<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
							<div style={{ color: '#fff', padding: '20px' }}>博客后台</div>

							<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
								<Menu.Item key="1">
									<Link to="/articles">
										<UserOutlined />
										<span className="nav-text">nav 1</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to="/juhe">
										<VideoCameraOutlined />
										<span className="nav-text">nav 2</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to="/">
										<UploadOutlined />
										<span className="nav-text">nav 2</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="4">
									<UserOutlined />
									<span className="nav-text">nav 4</span>
								</Menu.Item>
							</Menu>
						</Sider>
						<Layout className="site-layout">
							<Header className="site-layout-background" style={{ padding: 0 }} />
							<Content style={{ margin: '0 16px' }}>
								<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
									Bill is a cat.
									<Switch>
										<Route exact path="/">
											<div>home</div>
										</Route>
										<Route path="/articles">
											<Articles />
										</Route>
										<Route path="/juhe">
											<Juhe />
										</Route>
									</Switch>
								</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>abandon.work admin by Ant Design</Footer>
						</Layout>
					</Layout>
				</div>
			</HashRouter>
		);
	}
}

export default App;
