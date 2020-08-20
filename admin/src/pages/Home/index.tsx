import React from 'react';
import { getBlogList, getUserList } from '../../api/request';
import { Button } from 'antd';
import { connect } from "react-redux";

interface IState {
    articleLength: number;
    userLength: number;
}
class Home extends React.Component<{ Logout?: any }, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            articleLength: 0,
            userLength: 0
        }
    }

    componentDidMount() {
        getBlogList().then((res: any) => {
            this.setState({
                articleLength: res.data.length
            })
        });
        getUserList().then((res: any) => {
            this.setState({
                userLength: res.list.length
            })
        })
    }

    handleLogout = () => {
        console.log('logout');
        this.props.Logout();
        sessionStorage.setItem('login', '0');
    }

    render() {
        return (
            <div>
                <div>this is Home</div>
                <div>已有 {this.state.articleLength} 篇文章</div>
                <div>已有 {this.state.userLength} 位用户</div>
                <Button onClick={this.handleLogout}>log out</Button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLogin: state
    }
}

// @ts-ignore
const mapDispatchToProps = (dispatch) => {
    return {
        Login: () => dispatch({ type: 'login' }),
        Logout: () => dispatch({ type: 'logout' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)