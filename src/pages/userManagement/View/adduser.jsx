import React, { useState, useRef } from 'react';
import { Form, Input, Select, Checkbox, Row, Col } from 'antd';
import styles from './adduser.less';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const Adduser = () => {

    return (
        <div className={styles.add_user}>
            <Form>
                <span>用户名</span>
                <Form.Item label="" className={styles.title}>
                    <Input placeholder="" maxLength="20" />
                </Form.Item>
                <span>密码</span>
                <Form.Item label="" className={styles.title}>
                    <Input placeholder="" maxLength="20" />
                </Form.Item>
                <span>用户角色</span>
                <Form.Item label="" className={styles.title}>
                    <Select defaultValue=""  onChange={handleChange}>
                        <Option value="1">管理员</Option>
                        <Option value="2">渠道商</Option>
                    </Select>
                </Form.Item>
                <span>功能权限</span>
                <Form.Item label="" className={styles.title}>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Row>
                            <Col span={8}  className={styles.items}>
                                <Checkbox value="A">首页</Checkbox>
                            </Col>
                            <Col span={8} className={styles.items}>
                                <Checkbox value="B">数据统计</Checkbox>
                            </Col>
                            <Col span={8} className={styles.items}>
                                <Checkbox value="C">页面管理</Checkbox>
                            </Col>
                            <Col span={8} className={styles.items}>
                                <Checkbox value="D">用户管理</Checkbox>
                            </Col>
                            <Col span={8} className={styles.items}>
                                <Checkbox value="E">营销管理-管理</Checkbox>
                            </Col>
                            <Col span={8} className={styles.items}>
                                <Checkbox value="F">营销管理-渠道</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Adduser;