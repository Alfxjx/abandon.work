import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import './index.css';
import { postLogin } from "../../api/request";
import { connect } from "react-redux";


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login: React.FC = (props: any) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
        const { username, password } = values;
        let status, token, message;
        postLogin({ username: username, password: password }).then((res: any) => {
            status = res.status;
            token = res.post.token;
            message = res.message;
            return { status, token, message }
        }).then(res => {
            console.log(res.status)
            if (res.status === 1) {
                props.Login();
                sessionStorage.setItem('login', '1');
                localStorage.setItem('jwt', res.token)
            } else {
                props.Logout();
            }
        });

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="login-wrapper">
            <Row justify={"center"} align={"middle"} style={{ width: "100vw" }}>
                <Col>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                        </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)