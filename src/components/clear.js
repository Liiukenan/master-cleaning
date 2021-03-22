import React, { Component } from 'react'
import './clear.styl'
class Clear extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="clear">
        <div className="box middle">
          <div className="article flex-between">
            <div className="left flex-column flex-justify-center">
              <img
                src={require('../assets/images/ic_rubbishclean_white.png')}
                alt=""
                width="104"
                height="104"
              />
              <div className="title">Wi-Fi加速</div>
              <div className="paragraph">
                优化Wi-Fi，提升数据传输速度
              </div>
            </div>
            <div className="right ">
              <img
                src={require('../assets/images/phone_rubbishclean.png')}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="box">
          <div className="article flex-between">
            <div className="right">
              <img
                src={require('../assets/images/phone_wechatclean.png')}
                alt=""
              />
            </div>
            <div className="left flex-column flex-justify-center">
              <img
                src={require('../assets/images/ic_wechatclean_white.png')}
                alt=""
                width="104"
                height="104"
              />
              <div className="title">防蹭网</div>
              <div className="paragraph">扫码联网设备，拒绝蹭网</div>
            </div>
          </div>
        </div>
        <div className="box middle">
          <div className="article flex-between">
            <div className="left flex-column flex-justify-center">
              <img
                src={require('../assets/images/ic_bost_white.png')}
                alt=""
                width="104"
                height="104"
              />
              <div className="title">网络测速</div>
              <div className="paragraph">了解当前网络的下载速度</div>
            </div>
            <div className="right">
              <img src={require('../assets/images/phone_boost.png')} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Clear
