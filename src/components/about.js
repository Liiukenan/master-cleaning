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
                    <h3 className="logo">秀我P图</h3>
                </div>
                <div className="title">
                    关于我们
                </div>
                <p className="content">
                秀我P图是悦玺清风团队推出的一款P图抠图工具，让你不再为证件照“不上相”而发愁；拼图让你自由的将多张图片变为一张美图 ；秀我P图将成为你必不可少的天天都想P图的小助手。
                </p>
                <div  className="title">
                    联系我们
                </div>
                <p className="content">
                名称：北京悦玺清风文化传媒有限公司
                </p>
                <p className="content">
                地址：北京市通州区台湖北里29号楼6层619




                </p>
                <p className="content">
                    联系方式： 高女士  010-57625289
                </p>

                
                </div>
                <Footer/>
            </div>
        );
    }
}
export default About;