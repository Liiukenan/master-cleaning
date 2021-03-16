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
                    <h3 className="logo">简变P图</h3>
                </div>
                <div className="title">
                    关于我们
                </div>
                <p className="content">
                简变P图是悦玺清风团队推出的一款P图抠图工具，让你不再为证件照“不上相”而发愁；拼图让你自由的将多张图片变为一张美图 ；简变P图将成为你必不可少的天天都想P图的小助手。
                </p>
                <div  className="title">
                    联系我们
                </div>
                <p className="content">
                名称：北京铂讯悦动科技有限公司
                </p>
                <p className="content">
                地址：北京市朝阳区高碑店乡半壁店村惠河南街1008号B座5层东区5018
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