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
              <div className="title">设置来电秀</div>
              <div className="paragraph">
                来电时的来电秀不再单一，不仅有铃声还有画面
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
              <div className="title">设置壁纸</div>
              <div className="paragraph">手机壁纸过于单调，为何不换张个性壁纸，海量壁纸任你选</div>
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
              <div className="title">换铃声</div>
              <div className="paragraph">换个铃声，换个心情，总有适合你的一款专属铃声</div>
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
