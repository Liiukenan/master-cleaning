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
                    <img src={require('../assets/images/logo.png')} alt=""/>
                    <h3 className="logo">手机清理大师</h3>
                </div>
                <div className="title">
                    关于我们
                </div>
                <p className="content">
                    手机清理大师是北京微蜜友网络科技有限公司开发的一款安卓手机软件，可以实现提升手机运行速度、垃圾清理、电池优化、软件管理等功能。
                </p>
                <p className="content">
                    手机清理大师是一款超棒的手机垃圾清理优化软件。轻松快速的一键清理垃圾，释放手机内存！快捷的工具App，针对性的清理各种垃圾，能够将你手机系统自带以及各种应用、游戏运行所产生的垃圾一键清理，手机运行也更快。
                </p>
                <div  className="title">
                    联系我们
                </div>
                <p className="content">
                    公司名称：北京微蜜友网络科技有限公司
                </p>
                <p className="content">
                    注册地址：北京市通州区台湖北里24号楼11层1106
                </p>
                <p className="content">
                    联系方式： 张女士 13321138549
                </p>

                
                </div>
                <Footer/>
            </div>
        );
    }
}
export default About;