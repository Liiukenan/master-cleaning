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
                            <div className="subtitle">设置来电秀</div>
                            <div className="paragraph">来电秀更加与众不同</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_rubbishclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">设置壁纸</div>
                            <div className="paragraph">换张壁纸，换个心情</div>
                        </div>
                        <div className="flex-column flex-items-center">
                            <img src={require("../assets/images/ic_wechatclean.png")} alt="" width="116" height="116"/>
                            <div className="subtitle">换铃声</div>
                            <div className="paragraph">告别单调的铃声</div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Main;