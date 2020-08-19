import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Articles from './pages/articles/index';
import Juhe from './pages/juhe/index';
import Home from "./pages/Home/index";
import BBS from './pages/bbs/index';
import Login from './pages/Login/index'
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


const { Content, Footer, Sider } = Layout;

interface IProps {
	isLogin?: boolean
}

class App extends React.Component<IProps> {
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed: boolean) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		let renderer;
		if (this.props.isLogin) {
			renderer = <HashRouter>
				<div className="App">
					<Layout style={{ minHeight: '100vh' }}>
						<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
							<div style={{ color: '#fff', padding: '20px' }}>博客后台</div>

							<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
								<Menu.Item key="1">
									<Link to="/">
										<UserOutlined />
										<span className="nav-text">主页</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to="/juhe">
										<VideoCameraOutlined />
										<span className="nav-text">聚合信息</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to="/articles">
										<UploadOutlined />
										<span className="nav-text">文章管理</span>
									</Link>
								</Menu.Item>
								<Menu.Item key="4">
									<Link to="/bbs">
										<UserOutlined />
										<span className="nav-text">留言管理</span>
									</Link>
								</Menu.Item>
							</Menu>
						</Sider>
						<Layout className="site-layout">
							<Content style={{ margin: '0 16px' }}>
								<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
									<Switch>
										<Route exact path="/">
											<Home />
										</Route>
										<Route path="/articles">
											<Articles />
										</Route>
										<Route path="/juhe">
											<Juhe />
										</Route>
										<Route path="/bbs">
											<BBS />
										</Route>
									</Switch>
								</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>abandon.work's admin by Ant Design</Footer>
						</Layout>
					</Layout>
				</div>
			</HashRouter>
		} else {
			renderer = <Login />
		}
		return renderer
	}
}

function mapStateToProps(state: boolean) {
	return {
		isLogin: state
	}
}

//需要触发什么行为
function mapDispatchToProps(dispatch:any) {
    return {
        Login: () => dispatch({ type: 'login' }),
        Logout: () => dispatch({ type: 'logout' })
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
