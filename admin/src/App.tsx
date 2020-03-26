import React from 'react';
import './App.css';
import { Layout } from 'antd';

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
			<div className="App">
				<Layout style={{ minHeight: '100vh' }}>
					<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}></Sider>
					<Layout className="site-layout">
						<Header className="site-layout-background" style={{ padding: 0 }} />
						<Content style={{ margin: '0 16px' }}>
							<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
								Bill is a cat.
							</div>
						</Content>
						<Footer style={{ textAlign: 'center' }}>abandon.work admin by Ant Design</Footer>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default App;
