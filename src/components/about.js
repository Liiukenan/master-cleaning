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
            <h3 className="logo">海豚WiFi管家</h3>
          </div>
          <div className="title">关于我们</div>
          <p className="content">
          海豚WiFi管家是小鹿快跑团队推出的一款Wi-Fi管理工具，帮助用户轻松优化与管理Wi-Fi。主要功能有WiFi优化、WiFi管理、网络测速、防蹭网。

          </p>
          <div className="title">联系我们</div>
          <p className="content">宁波小鹿快跑科技有限公司</p>
          <p className="content">浙江省宁波市大榭开发区滨海南路111号西楼A1746-6室</p>
          <p className="content">联系方式：董先生 13466469675</p>
        </div>
        <Footer />
      </div>
    )
  }
}
export default About
