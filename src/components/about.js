import React, { Component } from 'react'
import './about.styl'
import Footer from "./footer"
class About extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div className="about-box">
                <div className="about">
                <div className="header flex flex-items-center">
                    <img src={require('../assets/images/logo.png')} alt="" width="48" height="48"/>
                    <h3 className="logo">樱桃超炫来电秀</h3>
                </div>
                <div className="title">
                    关于我们
                </div>
                <p className="content">
                樱桃超炫来电秀是北京铂展悦动科技有限公司开发的一款安卓手机软件，可以实现设置来电秀、设置壁纸、设置铃声等功能。

                </p>
                <p className="content">
                在樱桃超炫来电秀APP中，汇集了海量的壁纸、视频、铃声，给用户提供众多可选择的素材，让用户的手机更加炫酷，每天都有好心情。


                </p>
                <div  className="title">
                    联系我们
                </div>
                <p className="content">
                    公司名称：北京铂展悦动科技有限公司
                </p>
                <p className="content">
                    注册地址：北京市朝阳区高碑店乡半壁店村惠河南街1008号B座5层东区5026
                </p>
                <p className="content">
                    联系方式： 邵先生  13021236277
                </p>

                
                </div>
                <Footer/>
            </div>
        );
    }
}
export default About;