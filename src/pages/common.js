
import 'normalize.css'
import 'vant/lib/index.css';
import 'vue-ydui/dist/ydui.base.css'
import '@/assets/css/style.scss'
import {initUrlParams} from '../utils/app.js'

import '../utils/fastClick.js'
import '../utils/setHtmlFontSize.js'
import {isWechat} from "../utils/isTerminal";

initUrlParams();


window.actId = 1;


if(!isWechat){
    document.body.style.display = 'none';
    // Dialog.alert({
    //     message: '请在微信客户端打开该链接'
    // }).then(() => {
    //     // on close
    // });
    alert('请在微信客户端打开该链接')
}

