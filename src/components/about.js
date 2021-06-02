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
            <h3 className="logo">闪电5G快连</h3>
          </div>
          <div className="title">关于我们</div>
          <p className="content">
          闪电5G快连是深圳市灿星佳业信息科技有限公司推出的一款Wi-Fi管理工具，帮助用户轻松优化与管理Wi-Fi。主要功能有WiFi优化、WiFi管理、网络测速、防蹭网。

          </p>
          <div className="title">联系我们</div>
          <p className="content">深圳市灿星佳业信息科技有限公司</p>
          <p className="content">地址：深圳市南山区蛇口街道深圳湾社区科苑南路1313号三湘海尚花园E8E</p>
          <p className="content">联系方式：高女士 010-57625289</p>
        </div>
        <Footer />
      </div>
    )
  }
}
export default About
