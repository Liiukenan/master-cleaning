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
                            金刚超速手机保卫者
                        </div>
                        <div className="subtitle flex-justify-center flex-items-center">
                            <i>简洁</i>
                            <span></span>
                            <i>极速</i>
                            <span></span>
                            <i>高效</i>
                        </div>
                        <div className="flex-justify-center">
                            <a href="https://cdn.suapp.mobi/app/app-sevenstar-release_jingang.apk" className="download flex-items-center flex-justify-center">
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