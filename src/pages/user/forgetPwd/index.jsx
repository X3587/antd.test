import React, { useState } from 'react';
import { Link, connect, history } from 'umi';
import styles from './index.less';
import { Form, Input, Button } from "antd"

const Index = () => {
  return (
    <div className={styles.pwd}>
      <div style={{ padding: 30 }}>
        <div className={styles.tit}>忘记密码</div>
        <Form>
          <Form.Item>
            <Input.Group compact>
              <Input disabled={true} style={{ width: '30%' }} defaultValue="+86" />
              <Input style={{ width: '70%' }} placeholder="11位手机号" />
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Input style={{ width: '68%', marginRight: '2%' }} placeholder="输入验证码" />
            <Button style={{ width: '30%' }}>获取验证码</Button>
          </Form.Item>
          <Form.Item>
            <Input style={{ width: '100%' }} placeholder="6 - 16位密码，区分大小写" />
          </Form.Item>
          <Form.Item>
            <Input style={{ width: '100%' }} placeholder="确认密码" />
          </Form.Item>
          <div style={{ color: "#FF0000", fontSize: 14, marginBottom: "20px" }}>密码为6-16位，必须包含数字和字母</div>
          <div style={{marginBottom: "20px"}}><Button type="primary" style={{ marginRight: 20, width: "150px" }}>确认修改</Button><Button>取消</Button></div>
          <div><a style={{ color: "#10369C", fontSize: 14 }} onClick={() => { history.push('/user/login') }}>已有账号，立即登录</a></div>
        </Form>
      </div>
    </div>
  );
}

export default Index;
