import React, { useState, useEffect } from "react";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { Row, Col, Input, Button, Select, Upload, message, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./CreateArticle.css";
import { postNewBlog, getPictureList, getBlogById } from "../../../api/request";

const { TextArea } = Input;
// const { Option } = Select;

export default function CreateArticle() {
	// eslint-disable-next-line
	const [titleContent, setTitleContent] = useState("");
	const [articleContent, setArticleContent] = useState(""); //markdown的编辑内容
	const [markdownContent, setMarkdownContent] = useState("预览内容"); //html内容
	// eslint-disable-next-line
	const [tagContent, setTagContent] = useState([] as any[]);
	const [desContent, setDesContent] = useState("");
	const [titlePicContent, setTitlePicContent] = useState("");
	const [picList, setPicList] = useState([] as string[]);
	const [webPicList, setWebPicList] = useState([] as string[]);
	const [isPromoteContent, setIsPromote] = useState(false);

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
	});

	useEffect(() => {
		getPictureList().then((res: any) => {
			let arr: any = [];
			res.data.forEach((element: any) => {
				console.log(arr.indexOf(element));
				if (arr.indexOf(element.url) === -1) {
					arr.push(element.url);
				}
			});
			setWebPicList(arr);
		});
		let search = window.location.href.split('?');
		let id;
		if(search.length>1){
			let pairs = search[1].split('=');
			id = pairs[1];
			if(id!==''){
				getBlogById(id).then((res:any)=>{
					const {title, tags, body, promote, picture, description} = res.data;
					setTitleContent(title);
					setArticleContent(body);
					setDesContent(description);
					setTagContent(tags);
					setIsPromote(promote);
					setTitlePicContent(picture);
					// TODO BUG cannot update the state
				})
			}
		}
	}, []);

	const changeTitleContent = (e: any) => {
		setTitleContent(e.target.value);
	};

	const changeContent = (e: any) => {
		setArticleContent(e.target.value);
		let html = marked(e.target.value);
		setMarkdownContent(html);
	};

	const changeDesContent = (e: any) => {
		setDesContent(e.target.value);
	};

	const changeTagContent = (value: any) => {
		console.log(`selected ${value}`);
		setTagContent(value);
	};

	const changeTitlePicContent = (e: any) => {
		setTitlePicContent(e.target.value);
	};

	const onPromoteChange = (e: any) => {
		setIsPromote(e.target.value);
	};

	const handleSubmitBlog = () => {
		console.log("submit");
		console.log(`jwt- ${localStorage.getItem("jwt")}`);
		let submitObj = {
			title: titleContent,
			author: sessionStorage.getItem("username"),
			description: desContent,
			tags: tagContent.join(","),
			body: articleContent,
			date_posted: new Date(),
			promote: isPromoteContent,
			picture: titlePicContent,
		};
		postNewBlog(submitObj)
			.then((res: any) => {
				if (res.status === 200) {
					message.info(res.message);
				}
			})
			.catch((err) => {
				message.error("new post created failed");
			});
	};

	const uploadProps = {
		action: "/api/picture",
		// @ts-ignore
		onChange({ file, fileList }) {
			if (file.status === "done") {
				setPicList([...picList, file.name]);
				console.log(fileList);
			}
		},
	};

	return (
		<div>
			<Row gutter={5} style={{ marginTop: "10px" }}>
				<Col span={24}>
					<Row gutter={8} justify={"start"}>
						<Col span={8}>
							<Input
								placeholder="输入标题"
								onChange={changeTitleContent}
								onPressEnter={changeTitleContent}
							/>
						</Col>
						<Col span={8}>
							<Input
								placeholder="标题图链接"
								onChange={changeTitlePicContent}
								onPressEnter={changeTitlePicContent}
							/>
						</Col>
						<Col span={8} style={{ padding: 0 }}>
							<Select
								mode="tags"
								style={{ width: "100%" }}
								placeholder="Tags Mode"
								onChange={changeTagContent}
							></Select>
						</Col>
					</Row>
					<Row style={{ marginTop: "10px" }}>
						<Col span={6}>
							<TextArea
								onChange={changeDesContent}
								onPressEnter={changeDesContent}
								placeholder="输入摘要"
							/>
						</Col>
						<Col span={6}>
							<Upload {...uploadProps}>
								<Button>
									<UploadOutlined /> Upload
								</Button>
							</Upload>
						</Col>
						<Col span={12}>
							{picList.map((item) => {
								return (
									<span key={item + Math.random().toString()}>
										{"http://www.abandon.work/api/public/" + item}
									</span>
								);
							})}
						</Col>
					</Row>
					<Row>
						<Radio.Group onChange={onPromoteChange} value={isPromoteContent}>
							<Radio value={true}>推荐</Radio>
							<Radio value={false}>不推荐</Radio>
						</Radio.Group>
					</Row>
					<Row>
						<div className="web-pic">
							{webPicList.map((item) => {
								return <div key={item + Math.random().toString()}>{item}</div>;
							})}
						</div>
					</Row>
					<Row gutter={8} style={{ marginTop: "10px" }}>
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
							<div
								className="show-html"
								dangerouslySetInnerHTML={{ __html: markdownContent }}
							></div>
						</Col>
					</Row>
					<Row
						justify={"start"}
						onClick={handleSubmitBlog}
						style={{ marginTop: "10px" }}
					>
						<Button type={"primary"} size={"large"}>
							提交
						</Button>
					</Row>
				</Col>
			</Row>
		</div>
	);
}
