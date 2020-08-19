import React from 'react';
import { Table } from 'antd';
import { getBlogList } from "../../../api/request";

export default class ArticlesTable extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        getBlogList().then((res: any) => {
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        const columns = [
            {
                title:'序号',
                dataIndex:'key',
                key:'key'
            },
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title'
            },
            {
                title: '作者',
                dataIndex: 'author',
                key: 'author'
            },
            {
                title: '描述',
                dataIndex: 'description',
                key: 'description'
            }
        ];
        let tableData:any[] = [];
        this.state.data.forEach((item: any, index) => {
            tableData.push({
                key: ++index,
                title: item.title,
                author: item.author,
                description: item.description
            })
        })
        return (
            <div>
                <Table columns={columns} dataSource={tableData} bordered></Table>
            </div>
        )
    }
}