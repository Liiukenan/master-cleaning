import React from 'react'
import './nav.styl'
import { Link } from 'react-router-dom'
function nav(props) {
  return (
    <div>
      <header>
        <div className="content flex-between">
          <div className="left flex-items-center">
            <img
              src={require('../assets/images/logo.png')}
              alt=""
              width="48"
              height="48"
            />
            <span className="fs-30 ml-10">海豚WiFi管家</span>
            <div className="label fs-18">快捷畅游网络世界</div>
          </div>
          <div className="right flex-items-center">
            <Link to="/">首页</Link>
            <span></span>
            <Link to="/about">关于我们</Link>
            <span></span>
            <a href="http://bj-zlb.oss-cn-beijing.aliyuncs.com/static_html/htgj/agreement.html">
                服务协议
              </a>
              <span></span>
              <a href="http://bj-zlb.oss-cn-beijing.aliyuncs.com/static_html/htgj/privacy_policy.html">
                隐私政策
              </a>
          </div>
        </div>
      </header>
    </div>
  )
}
export default nav
