import React from 'react';
import { Table, Tag, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { getBlogList, deleteOneBlog } from "../../../api/request";
import { EditDelItem } from "./EditDelItem";

const { confirm } = Modal;
export default class ArticlesTable extends React.Component {
    state = {
        data: [],
        selectedKeys: 0
    }
    componentDidMount() {
        getBlogList().then((res: any) => {
            this.setState({
                data: res.data
            })
        })
    }
    handleEdit() {
        message.info('编辑成功')
    }
    handleDelete(_id: string) {
        console.log(`_id: ${_id}`)
        deleteOneBlog(_id).then((res: any) => {
            if (res) {
                if (res.status === 200) {
                    message.info(`${res.post.title}-${res.message}`);
                } else {
                    message.error('response error ' + res.status)
                }
            } else {
                message.error('no response')
            }
        })
    }
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'key',
                key: 'key'
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
            // {
            //     title: '描述',
            //     dataIndex: 'description',
            //     key: 'description',
            // },
            {
                title: '时间',
                dataIndex: 'date_posted',
                key: 'date_posted'
            },
            {
                title: '推荐',
                dataIndex: 'promote',
                key: 'promote',
                render: (i: string) => {
                    let color;
                    if (i === 'yes') {
                        color = 'gold';
                    } else if (i === 'no') {
                        color = 'geekblue';
                    }
                    return (
                        <Tag color={color} key={i}>{i}</Tag>
                    )
                }

            },
            {
                title: '操作',
                dataIndex: '',
                key: 'actions',
                render: () => (
                    <EditDelItem
                        id={this.state.selectedKeys}
                        data={this.state.data}
                        deletePost={this.handleDelete.bind(this)}
                    />
                )
            }
        ];
        let tableData: any[] = [];
        this.state.data.forEach((item: any, index) => {
            tableData.push({
                key: ++index,
                title: item.title,
                author: item.author,
                description: item.description,
                date_posted: item.date_posted.match(/^(\d{4}-\d{2}-\d{2})/i)[0],
                promote: item.promote ? "yes" : "no"
            })
        })
        const rowSelection = {
            onChange: (selectedRowKeys: any, selectedRows: any) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.setState({
                    selectedKeys: --selectedRowKeys
                })
            }
        }
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    bordered
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                        rowExpandable: record => record.description.length !== 0
                    }}
                    rowSelection={{
                        type: "radio",
                        ...rowSelection
                    }}
                >
                </Table>
            </div>
        )
    }
}