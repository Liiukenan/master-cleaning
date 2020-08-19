/***
 * 
 *统一定义接口，有利于维护 
 * 
 **/
 
const serverAPI= 'http://54.222.148.146:46000';
const URL ={
    getInfo:`${serverAPI}/ranking_activity/get_actitiyinfo`,//接口1
    // histdata:HISTORY+'type/pagedata' //接口2
}
export default URL