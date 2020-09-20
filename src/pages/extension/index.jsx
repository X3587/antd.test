import React, { useState, useRef } from 'react';
import styles from './index.less';
import { message } from 'antd'

const  alertSuccess=()=>{
    message.success('链接复制成功');
}
const Index = () => {

    const list = [
        { key: 1, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/ks_64x64.png", title: "快手·专属订购版", copytxt: "复制邀请链接" },
        { key: 2, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/ks_64x64.png", title: "快手·专属赠送版", copytxt: "复制邀请链接" },
        { key: 3, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/dy_64x64.png", title: "抖音·专属订购版", copytxt: "复制邀请链接" },
        { key: 4, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/dy_64x64.png", title: "抖音·专属赠送版", copytxt: "复制邀请链接" },
        { key: 5, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/tb_64x64.png", title: "淘宝·专属订购版", copytxt: "复制邀请链接" },
        { key: 6, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/tb_64x64.png", title: "淘宝·专属赠送版", copytxt: "复制邀请链接" },
        { key: 7, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/pdd_64x64.png", title: "拼多多·专属订购版", copytxt: "敬请期待" },
        { key: 8, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/pdd_64x64.png", title: "拼多多·专属赠送版", copytxt: "敬请期待" },
        { key: 9, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/yz_64x64.png", title: "有赞.专属订购版", copytxt: "敬请期待" },
        { key: 10, image: "https://cjwx.oss-cn-zhangjiakou.aliyuncs.com/front/%E6%89%93%E5%8D%95%E4%BE%A0/yz_64x64.png", title: "有赞·专属赠送版", copytxt: "敬请期待" },

    ]
    return (
        <div className={styles.exteension}>
            {
                list.map((item,index) => {
                    return (
                        <div className={styles.items}>
                            <div className={styles.content}>
                                <div className={styles.img}><img src={item.image} /></div>
                                <div className={styles.title}>{item.title}</div>
                            </div>
                            <div onClick={item.copytxt =='敬请期待'?'':alertSuccess} className={item.copytxt =='敬请期待'?styles.copyLinks:styles.copyLink}>{item.copytxt}</div>
                        </div>
                    )
                })

            }

        </div>
    );
}

export default Index;