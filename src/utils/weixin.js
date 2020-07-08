



// 要使用请安装weixin-js-sdk

import wx from 'weixin-js-sdk';
import {Toast} from 'vant'





function shareFriend(config){
    wx.showMenuItems({
        menuList: ["menuItem:share:timeline","menuItem:share:appMessage"], // 要显示的菜单项，所有menu项见附录3
        success: function (res) {

        },
        fail: function (res) {
        }
    });
    wx.onMenuShareAppMessage({
        title: config.shareTitle, // 分享标题
        desc: config.shareBody, // 分享描述
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        //type: '', // 分享类型,music、video或link，不填默认为link
        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {

        },
        cancel: function () {
        }
    });
}

function shareFriendQ(config){
    setTimeout(()=>{
        wx.onMenuShareTimeline({
            title: config.shareTitle, // 分享标题
            link: config.shareUrl, // 分享链接
            imgUrl: config.shareImg, // 分享图标
            success: function () {

            },
            cancel: function () {
            }
        });
    },600)

}


function vxPay(r,callBack) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId": r.appId,
            "timeStamp": r.timeStamp,
            "nonceStr": r.nonceStr,
            "package": r.packageValue,
            "signType": "MD5",
            "paySign": r.paySign
        },
        function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                callBack(r.orderNum)
            } else {
                if (res.err_msg == "get_brand_wcpay_request:cancel") {
                    Toast("您已取消支付。");
                } else {
                    Toast('充值失败，请稍后再试。');
                }
            }
        }
    );
}
export {shareFriendQ,shareFriend,vxPay}
