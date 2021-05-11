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
                            <div className="subtitle">垃圾清理</div>
                            <div className="paragraph">清除无用文件</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_rubbishclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">网络分析</div>
                            <div className="paragraph">了解网络状况</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_wechatclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">手机杀毒</div>
                            <div className="paragraph">消灭病毒威胁</div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Main;