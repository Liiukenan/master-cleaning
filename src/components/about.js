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
                    <h3 className="logo">5G网络精灵</h3>
                </div>
                <div className="title">
                    关于我们
                </div>
                <p className="content">
                5G网络精灵是科莱悦动团队推出的一款Wi-Fi管理工具，帮助用户轻松优化与管理Wi-Fi。主要功能有WiFi优化、WiFi管理、网络测速、防蹭网。

                </p>
                <div  className="title">
                    联系我们
                </div>
                <p className="content">
                名称：北京科莱悦动科技有限公司
                </p>
                <p className="content">
                地址：北京市朝阳区高碑店乡半壁店村惠河南街1008号B座5层东区5016
                </p>
                <p className="content">
                    联系方式：邵先生  13021236277
                </p>

                
                </div>
                <Footer/>
            </div>
        );
    }
}
export default About;