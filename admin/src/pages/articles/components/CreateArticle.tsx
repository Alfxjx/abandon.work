import React, { useState, useEffect } from 'react'
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { Row, Col, Input, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './CreateArticle.css';
import { postNewPicture } from "../../../api/request";

const { TextArea } = Input;
// const { Option } = Select;

export default function CreateArticle() {
    // eslint-disable-next-line
    const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    // eslint-disable-next-line
    const [tagContent, setTagContent] = useState([] as any[]);
    const [desContent, setDesContent] = useState('');

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
        gfm: true, // 允许 Git Hub标准的markdown.
        pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
        sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
        // tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
        breaks: true, // 允许回车换行（该选项要求 gfm 为true）
        smartLists: true, // 使用比原生markdown更时髦的列表
        smartypants: false, // 使用更为时髦的标点
    })

    useEffect(() => {
        console.log(tagContent)
    })

    const changeContent = (e: any) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }

    const changeDesContent = (e: any) => {
        setDesContent(e.target.value);
    }

    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
        setTagContent(value);
    }

    const handleSubmitBlog = () => {
        console.log('submit');
        let submitObj = {
            description: desContent,
            tags: tagContent,
            body: articleContent,
            date_posted: new Date()
        }
    }

    const uploadProps = {
        action: '/api/picture',
        // @ts-ignore
        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
                // TODO check upload过程
                console.log(file, fileList);
                // postNewPicture({file:1})
            }
        },

    }

    return (
        <div>
            <Row gutter={5} style={{ marginTop: "10px" }}>
                <Col span={24}>
                    <Row gutter={8} justify={"start"}>
                        <Col span={12}><Input placeholder="输入标题" /></Col>
                        <Col span={12} style={{ padding: 0 }}>
                            <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
                            </Select>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={12}>
                            <TextArea
                                onChange={changeDesContent}
                                onPressEnter={changeDesContent}
                                placeholder="输入摘要"
                            />
                        </Col>
                        <Col span={12}>
                            <Upload {...uploadProps}>
                                <Button>
                                    <UploadOutlined /> Upload
                                </Button>
                            </Upload>
                        </Col>
                    </Row>
                    <Row gutter={8} style={{ marginTop: "10px" }} >
                        <Col span={12}>
                            <TextArea
                                className="markdown-content"
                                rows={15}
                                onChange={changeContent}
                                onPressEnter={changeContent}
                                placeholder="编辑内容"
                            />
                        </Col>
                        <Col span={12} className="preview-area">
                            <div className="show-html" dangerouslySetInnerHTML={{ __html: markdownContent }}></div>
                        </Col>
                    </Row>
                    <Row justify={"start"} onClick={handleSubmitBlog} style={{ marginTop: "10px" }} >
                        <Button type={"primary"} size={"large"}>提交</Button>
                    </Row>
                </Col>
            </Row>

        </div>
    )

}