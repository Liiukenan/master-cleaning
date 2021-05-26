import React, { Component } from 'react'
import './footer.styl'
import { Link } from 'react-router-dom'
class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="footer">
        <div className="foot">
          <div className="flex-between">
            <div className="left flex-items-center">
              <img
                src={require('../assets/images/logo.png')}
                alt=""
                width="32"
                height="32"
              />
              <span>随心连WIFI</span>
            </div>
            <div className="right flex-items-center">
              <Link to="/">首页</Link>
              <span></span>
              <Link to="/about">关于我们</Link>
              <span></span>
              <a href="http://bj-zlb.oss-cn-beijing.aliyuncs.com/static_html/sxl/agreement.html">
                服务协议
              </a>
              <span></span>
              <a href="http://bj-zlb.oss-cn-beijing.aliyuncs.com/static_html/sxl/privacy_policy.html">
                隐私政策
              </a>
            </div>
          </div>
          <div className="copyright">
            Copyright(C)2020-2021 北京微蜜友网络科技有限公司
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
