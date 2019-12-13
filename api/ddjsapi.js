import {request} from '../lib/request'


//获取jsapi_ticket（鉴权）
export function GetJsapiTicket(params) {
    return request({
        url:"/f/dingtalk/index/getJsapiTicket",
        method:"get",
        params:params
    })
}




//获取token（鉴权）
export function GetAccessToken() {
    return request({
        url:"/f/dingtalk/index/getAccessToken",
        method:"get",
        //params:params
    })
}


