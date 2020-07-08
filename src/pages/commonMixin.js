import {getToken,isLogin} from '../utils/dataStorage.js'
import {setCurrentPage} from "../utils/dataStorage";

import wx from 'weixin-js-sdk';
import Config from '../config/app'
import {Toast} from "vant";




export default {
    data: function () {
        return {
            USERINFO:false,
            info:{
                appId:'',
                nonceStr:'',
                signature:'',
                timestamp:''
            }
        }
    },
    created(){

    },
    methods: {
    },
    mounted() {
        let that = this;
        // wxSignature({url:window.location.href}).then(r=>{
        //     if (r.resultCode == 500) return;
        //     sessionStorage.setItem('appId',r.signature.appId);
        //     if(!getToken()){
        //         setCurrentPage(window.location.href);
        //         window.location.href =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
        //             r.signature.appId  + "&redirect_uri=" + encodeURIComponent(Config.wxUrl)  +   "&response_type=code&scope=snsapi_userinfo&state=hus#wechat_redirect";
        //         return
        //     }
        //
        //     wx.config({
        //         debug:false,
        //         appId:r.signature.appId,
        //         nonceStr:r.signature.nonceStr,
        //         timestamp:r.signature.timestamp,
        //         signature : r.signature.signature,
        //         jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','checkJsApi','hideMenuItems','chooseWXPay','showMenuItems'] // 必填，需要使用的JS接口列表
        //     });
        //
        //     wx.ready(function () {
        //         wx.checkJsApi({
        //             jsApiList: [
        //                 'onMenuShareTimeline',
        //                 'onMenuShareAppMessage',
        //                 'chooseWXPay',
        //                 'hideMenuItems',
        //                 'showMenuItems'
        //             ],
        //             success: function (res) {
        //
        //             },
        //             fail: function (res) {
        //                 Toast('配置失败')
        //             }
        //         });
        //
        //         wx.hideMenuItems({
        //             menuList: [
        //                 'menuItem:share:appMessage',
        //                 'menuItem:share:timeline',
        //                 'menuItem:readMode', // 阅读模式
        //                 "menuItem:share:qq", //分享到qq
        //                 "menuItem:share:weiboApp", //分享到微博
        //                 "menuItem:openWithQQBrowser", //qq浏览器打开
        //                 "menuItem:openWithSafari", //safri打开
        //                 "menuItem:share:QZone", //空间
        //                 'menuItem:copyUrl' //复制链接
        //             ],
        //             success: function (res) {
        //
        //             },
        //             fail: function (res) {
        //
        //             }
        //
        //         });
        //
        //
        //
        //
        //         that.wxSignatureCallback()
        //     });
        //
        //     wx.error(function(res){
        //         Toast('签名失败')
        //     });
        // }).catch(_=>{Toast('获取签名信息失败')});
        //
        //
        //

    },
    beforeDestroy: function () {

    },
    components: {}
}
