import React, { Component } from 'react'
import './main.styl'
class Main extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div className="content-main">
                <div className="content">
                <div className="title-icon flex-between flex-items-center">
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_boost.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">手机加速</div>
                            <div className="paragraph">一键加速，释放内存</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_rubbishclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">垃圾清理</div>
                            <div className="paragraph">智能识别，急速清理</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_wechatclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">微信清理</div>
                            <div className="paragraph">微信专清，杜绝卡慢</div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Main;