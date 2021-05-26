import React, { Component } from 'react'
import './about.styl'
import Footer from './footer'
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="about-box">
        <div className="about">
          <div className="header flex flex-items-center">
            <img
              src={require('../assets/images/logo.png')}
              alt=""
              width="48"
              height="48"
            />
            <h3 className="logo">随心连WIFI</h3>
          </div>
          <div className="title">关于我们</div>
          <p className="content">
            随心连WIFI是我们推出的一款Wi-Fi管理工具，帮助用户轻松优化与管理Wi-Fi。主要功能有WiFi优化、WiFi管理、网络测速、防蹭网。
          </p>
          <div className="title">联系我们</div>
          <p className="content">名称：北京微蜜友网络科技有限公司</p>
          <p className="content">地址：北京市通州区台湖北里24号楼11层1106</p>
          <p className="content">联系方式：高女士 010-57625289</p>
        </div>
        <Footer />
      </div>
    )
  }
}
export default About
