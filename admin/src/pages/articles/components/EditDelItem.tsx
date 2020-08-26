import { Modal, Button, Space, message } from "antd";
import React, { useState } from 'react';

const ReachableContext = React.createContext('');
const UnreachableContext = React.createContext('');

// TODO
export const EditDelItem = (props: any) => {
    const [modal, contextHolder] = Modal.useModal();
    if (props.id < 0) {
        message.warn('please choose one first')
        return <></>
    } else {
        let _id = props.data[props.id]._id;
        const config = {
            title: 'Caution',
            content: (
                <>
                    <ReachableContext.Consumer>
                        {name => `确认删除_id: ${name}？`}
                    </ReachableContext.Consumer>
                </>
            ),
            onOk: () => {
                props.deletePost(_id)
            },
            onCancel: ()=>{
                message.info('已取消');
            }
        };
        return (
            <ReachableContext.Provider value={_id}>
                <Space>
                    <Button
                        size={"small"}
                        type="primary"
                        danger
                        onClick={() => {
                            modal.confirm(config);
                        }}
                    >
                        delete
                    </Button>
                    <Button
                        size="small"
                        type="default"
                        onClick={() => {
                            message.info('to be continued')
                        }}
                    >
                        edit
                    </Button>
                </Space>
                {/* `contextHolder` should always under the context you want to access */}
                {contextHolder}

                {/* Can not access this context since `contextHolder` is not in it */}
                <UnreachableContext.Provider value="Bamboo" />
            </ReachableContext.Provider>
        );
    }


};