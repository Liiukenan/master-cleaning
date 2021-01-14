import React, { Component } from 'react'
import './header.styl'
import Nav from './nav'
// import { Link } from "react-router-dom"
class Header extends Component {
    constructor(props) {           
       super(props);
       this.state = {}
    }
    render() {
        return (
            <div className="main">
               <Nav />
               <div className="banner">
                    <div className="banner-main">
                        <div className="title flex-justify-center">
                            樱桃超炫来电秀
                        </div>
                        <div className="subtitle flex-justify-center flex-items-center">
                            <i>酷炫</i>
                            <span></span>
                            <i>有趣</i>
                            <span></span>
                            <i>个性</i>
                        </div>
                        <div className="flex-justify-center">
                            <a href="http://cdn.suapp.mobi/app/sevenstar-t26-A0-vc12-vn1.0.4664.apk" className="download flex-items-center flex-justify-center">
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