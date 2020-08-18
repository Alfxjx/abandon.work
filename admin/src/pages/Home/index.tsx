import React from 'react';
import { getBlogList, getUserList } from '../../api/request';

interface IState {
    articleLength: number;
    userLength: number;
}
class Home extends React.Component<{}, IState> {
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

    render() {
        return (
            <div>
                <div>this is Home</div>
                <div>已有 {this.state.articleLength} 篇文章</div>
                <div>已有 {this.state.userLength} 位用户</div>
            </div>
        )
    }
}

export default Home