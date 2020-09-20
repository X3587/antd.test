import React, { useState, useRef } from 'react';
import { Table, Button, Space, Modal } from 'antd';
import styles from './index.less';
import Adduser from './View/adduser'



const Index = () => {
    const [adduser, setAdduser] = useState(false);
    const [stop, setStop] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const data = [
        {
            solt: 1,
            userName: "打单侠",
            role: '中间商',
            phone:"13401313082",
            email:"964560013@qq.com",
            status:"在线",
            remark:"备选内容备注内容"
        },
        {
            solt: 2,
            userName: "打单侠",
            role: '中间商',
            phone:"13401313082",
            email:"964560013@qq.com",
            status:"在线",
            remark:"备选内容备注内容"
        },
        {
            solt: 3,
            userName: "打单侠",
            role: '中间商',
            phone:"13401313082",
            email:"964560013@qq.com",
            status:"在线",
            remark:"备选内容备注内容"
        },
        {
            solt: 4,
            userName: "打单侠",
            role: '中间商',
            phone:"13401313082",
            email:"964560013@qq.com",
            status:"在线",
            remark:"备选内容备注内容"
        },
    ];

    const columns = [
        {
            title: '序号',
            dataIndex: 'solt',
            key: 'solt',
            width:"80px"
        },
        {
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName',
            width:"100px"
        },
        {
            title: '账号角色',
            dataIndex: 'role',
            key: 'role',
            width:"100px"
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
            width:"150px"
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
            ellipsis: true
        },
        {
            title: '帐号状态',
            dataIndex: 'status',
            key: 'status',
            width:"120px"
        },
        {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
            ellipsis: true
        },
        {
            title: '操作 ',
            dataIndex: 'operate',
            key: 'operate',
            ellipsis: true,
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => { setAdduser(true) }}>编辑</a>
                    <span style={{ color: "#1890FF" }}>|</span>
                    <a onClick={() => { setStop(true) }}>停用</a>
                    <span style={{ color: "#1890FF" }}>|</span>
                    <a onClick={() => { setDeleted(true) }}>删除</a>
                </Space>
            ),
        },

    ];
    return (
        <div className={styles.user_manage}>
            <div className={styles.header}>
                <Button type="primary" style={{ width: "120px" }} onClick={() => { setAdduser(true) }}>新建账号</Button>
            </div>
            <div className={styles.content}>
                <Table
                    rowSelection={{
                        type: "checkbox",
                    }}
                    columns={columns}
                    dataSource={data}
                />
            </div>
            <Modal
                title="新增用户"
                visible={adduser}
                onOk={() => { setAdduser(false) }}
                onCancel={() => { setAdduser(false) }}
                okText="创建"
            >
                <Adduser />
            </Modal>

            <Modal
                title="账号停用提醒"
                visible={stop}
                onOk={() => { setStop(false) }}
                onCancel={() => { setStop(false) }}
                okText="确定停用"
            >
                <p>你确定要停用该账号吗？停用之后该账号将暂时无法登陆。</p>
            </Modal>

            <Modal
                title="账号删除提醒"
                visible={deleted}
                onOk={() => { setDeleted(false) }}
                onCancel={() => { setDeleted(false) }}
                okText="确定删除"
            >
                <p>你确定要删除该账号吗？删除之后该账号将无法登陆！</p>
            </Modal>
           
        </div>

    );

}

export default Index;