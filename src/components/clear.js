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
              <div className="title">垃圾清理</div>
              <div className="paragraph">
              云端策略，智能清理手机里的垃圾
              </div>
            </div>
            <div className="right ">
              <img
                src={require('../assets/images/phone_rubbishclean.png')}
                alt=""
                width="340"
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
                width="340"
              />
            </div>
            <div className="left flex-column flex-justify-center">
              <img
                src={require('../assets/images/ic_wechatclean_white.png')}
                alt=""
                width="104"
                height="104"
              />
              <div className="title">网络分析</div>
              <div className="paragraph">全面优化网络环境，保护上网安全</div>
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
              <div className="title">手机杀毒</div>
              <div className="paragraph">每日更新病毒库，精准识别病毒威胁</div>
            </div>
            <div className="right">
              <img src={require('../assets/images/phone_boost.png')} alt="" width="340"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Clear
