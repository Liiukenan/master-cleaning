import React, { Component } from 'react'
import './header.styl'
import { Link } from "react-router-dom"
class Header extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div className="main">
               <header>
                    <div className="content flex-between">
                        <div className="left flex-items-center">
                        <img src={require("../assets/images/logo.png")} alt="" width="48" height="48"/> 
                            <span className="fs-30 ml-10">手机清理大师</span>
                            <div className="label fs-18">让手机更流畅更好用</div>
                        </div>
                        <div className="right flex-items-center">
                             <Link to="/">首页</Link>
                            <span></span>
                            <Link to="/about">关于我们</Link>
                            <span></span>
                            <a href="http://static.suapp.mobi/qlds/service_agreement.html">服务协议</a>
                            <span></span>
                            <a href="http://static.suapp.mobi/qlds/privacy_policy.html">隐私协议</a>
                        </div>
                    </div>
               </header>
               <div className="banner">
                    <div className="banner-main">
                        <div className="title flex-justify-center">
                            手机清理大师
                        </div>
                        <div className="subtitle flex-justify-center flex-items-center">
                            <i>简洁</i>
                            <span></span>
                            <i>极速</i>
                            <span></span>
                            <i>高效</i>
                        </div>
                        <div className="flex-justify-center">
                            <a href="./index.html" className="download flex-items-center flex-justify-center">
                                <img src={require("../assets/images/ic_android.png")} alt="" width="36" height="36"/>
                                <span>Andorid版下载</span>
                            </a>
                        </div>
                        <img src={require("../assets/images/img_head.png")} alt="" className="banner-img"/>
                    </div>

                    

               </div>
            </div>
        );
    }
}
export default Header;