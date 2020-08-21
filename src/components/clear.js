import React, { Component } from 'react'
import './clear.styl'
class Clear extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div className="clear">
               <div className="box">
                    <div className="article flex-between">
                        <div className="left flex-column flex-justify-center">
                            <img src={require("../assets/images/ic_bost_white.png")} alt="" width="104" height="104"/>
                            <div className="title">手机加速</div>
                            <div className="paragraph">
                                清理无用进程，降低内存使用，消除卡顿，一键加速，让手机恢复出厂时的速度
                            </div>

                        </div>
                        <div className="right">
                            <img src={require("../assets/images/phone_boost.png")} alt=""/>
                        </div>
                    </div>
               </div>
               <div className="box middle">
                    <div className="article flex-between">
                        <div className="right ">
                                <img src={require("../assets/images/phone_rubbishclean.png")} alt=""/>
                        </div>
                        <div className="left flex-column flex-justify-center">
                            <img src={require("../assets/images/ic_rubbishclean_white.png")} alt="" width="104" height="104"/>
                            <div className="title">垃圾清理</div>
                            <div className="paragraph">
                                智能扫描手机垃圾，急速清理，手机更干净，运行更快速
                            </div>

                        </div>
                        
                    </div>
               </div>
               <div className="box">
                    <div className="article flex-between">
                        <div className="left flex-column flex-justify-center">
                            <img src={require("../assets/images/ic_wechatclean_white.png")} alt="" width="104" height="104"/>
                            <div className="title">微信清理</div>
                            <div className="paragraph">
                                扫描微信缓存，让微信更快速，消除手机卡顿
                            </div>

                        </div>
                        <div className="right">
                            <img src={require("../assets/images/phone_wechatclean.png")} alt=""/>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}
export default Clear;