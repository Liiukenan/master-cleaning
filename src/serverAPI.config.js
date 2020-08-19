/***
 * 
 *统一定义接口，有利于维护 
 * 
 **/
let serverAPI;
if(process.env.NODE_ENV=="production"){//生产环境
    serverAPI="http://54.222.148.146:46000";
}else{//本地跑的服务
    serverAPI="http://54.222.148.146:46000/ddd";
}
const URL ={
    getInfo:`${serverAPI}/ranking_activity/get_actitiyinfo`,//接口1
    // histdata:HISTORY+'type/pagedata' //接口2
}
export default URL