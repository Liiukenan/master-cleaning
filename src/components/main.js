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
                            <div className="subtitle">WiFi加速</div>
                            <div className="paragraph">提升网络效率</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_rubbishclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">安全体检</div>
                            <div className="paragraph">了解网络安全情况</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_wechatclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">网络测速</div>
                            <div className="paragraph">了解真实网速</div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Main;