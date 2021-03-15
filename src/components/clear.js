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
              <div className="title">一键抠图</div>
              <div className="paragraph">
                一键抠出，让用户更快速的切换P图选择
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
              <div className="title">海量创意</div>
              <div className="paragraph">收录海量创意模板，让P图换装更简单</div>
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
              <div className="title">P图换装</div>
              <div className="paragraph">快捷智能替换人像，做朋友圈最靓的人</div>
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
