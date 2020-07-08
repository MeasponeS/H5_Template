/*
* 此页面为工具函数集合
*
* */

/**
 * url参数转换为js对象
 * @param key
 * @returns {*}
 */
export function currentUrlToParams(key = null) {
    let paramsUrl = (window.location.href).split('?');
    if(paramsUrl.length<2)return key ? null : {};
    let paramsArr = paramsUrl[1].split('&');
    let paramsData = {}
    paramsArr.forEach(r=>{
        let data = r.split('=')
        paramsData[data[0]] = data[1]
    })
    if(key)return paramsData.hasOwnProperty(key) ? paramsData[key] : null;
    return paramsData;
}

/*
*
* 初始化url参数
* */
export function initUrlParams() {
    window.URLPARAMS = currentUrlToParams()
    if(!window.URLPARAMS.hasOwnProperty('actId')){
        window.URLPARAMS.actId = ''
    }
}


