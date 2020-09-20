import React, { useState, useRef } from 'react';
import { Row, Col, Button, Radio, Modal, Table  } from 'antd';
import styles from './index.less';

const Index = () => {
  const [order, setOrder] = useState(false);
  const dataSource = [
    {
      key: '1',
      content: '打单侠1年订购',
      time: "2020-09-11-2021-09-11",
      price:"0.00",
    },
  ];
  
  const columns = [
    {
      title: '消费内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '有效期',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '应付金额',
      dataIndex: 'price',
      key: 'price',
      render: text => <div><span  style={{color:"#FF0000",fontSize:20}}>{text}</span>元</div>
     
    },
  ];
  
  return (
    <div className={styles.order}>
      <Row>
        <Col span={6}>
          <div className={styles.left_top}>
            <div className={styles.image}>
              <img src="https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/dadanxia.jpg" />
            </div>
            <div className={styles.info}>
              <div className={styles.items}>
                <div className={styles.title}>公司：</div>
                <div className={styles.name}>杭州速宇科技有限公司</div>
              </div>
              <div className={styles.items}>
                <div className={styles.title}>电话：</div>
                <div className={styles.name}>400-0000000</div>
              </div>
              <div className={styles.items}>
                <div className={styles.title}>QQ：</div>
                <div className={styles.name}>1778230665</div>
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.notice}>打单侠公告</div>
            <div className={styles.tips}>
              为迎接双11的到来，请关注打单侠最近即将发布的活动，优惠从优。
            </div>
            <div className={styles.time}>
              <div className={styles.time_header}>客服在线时间：</div>
              <div className={styles.time_content}>
                09:00-23:30,客服不在线时可直接留言阐述您的问题，我们会尽快给您回复。
              </div>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <div className={styles.right}>
            <div className={styles.right_title}>打单侠_智能化打单神器</div>
            <div className={styles.right_tip}>
              防止订单漏发、多发、少发，支持批量打印、订单自动合并、打印电子面单，打单统计等,让打单发货变得更简单。
            </div>
            <div className={styles.right_price}>
              <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：</span>
              <span style={{ fontWeight: 500 }}>240.00 元</span>
            </div>
            <div className={styles.right_actual}>
              <span>实&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;付：</span>
              <span style={{ fontSize: '20px', color: '#FF0000' }}>240.00</span>
              <span>元（省81元）</span>
            </div>
            <div className={styles.right_version}>
              <span>服务版本：</span>
              <span>
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a">标准版</Radio.Button>
                </Radio.Group>
              </span>
            </div>
            <div className={styles.right_days}>
              <span>周&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</span>
              <Radio.Group defaultValue="a">
                <Radio.Button value="a" className={styles.radio_item}>
                  1个月
                </Radio.Button>
                <Radio.Button value="b" className={styles.radio_item}>
                  3个月
                </Radio.Button>
                <Radio.Button value="c" className={styles.radio_item}>
                  6个月
                </Radio.Button>
                <Radio.Button value="d" className={styles.radio_item}>
                  1年
                </Radio.Button>
              </Radio.Group>
            </div>
            <div className={styles.btns}>
              <div onClick={()=>{setOrder(true)}}>立即订购</div>
            </div>
            <div className={styles.right_img}>
              <img src="https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/jieshao.jpg" />
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        title="确认您的订单信息"
        visible={order}
        onCancel={() => { setOrder(false) }}
        footer={
          <Button type="primary" onClick={()=>{setOrder(false)}}> 确定</Button>
        }
      >
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Modal>
    </div>
  );
};

export default Index;
