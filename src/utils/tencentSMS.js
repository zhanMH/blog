const CryptoJS = require('crypto-js')
const request = require('request')
const {SMS_CONF,TENCENT_CONF} =require("../conf/serve")

async function sendCode(phone,code){
    //拼接请求字符串,将排序好的请求参数格式化成“参数名称=参数值”的形式，然后将格式化后的各个参数用"&"拼接在一起
    let SMS_API = 'sms.tencentcloudapi.com'
    let qs = {
        Action: 'SendSms',
        Version: '2019-07-11',
        'PhoneNumberSet.0': '+86'+phone,
        TemplateID: SMS_CONF.templateId,
        Sign: SMS_CONF.smsSign,
        SmsSdkAppid: SMS_CONF.appid,
        Timestamp: Math.floor(+new Date / 1000),
        "TemplateParamSet.0": code,
        Nonce: Math.round(Math.random() * 100000),
        SecretId: TENCENT_CONF.SecretId,
    }
    //如下步骤是为了获得Signature
    let array = Object.keys(qs).sort()
    let str = []
    array.forEach(item => {
        str.push(item + '=' + qs[item])
    })
    str = str.join('&')
    str = ['GET', SMS_API, "/?", str].join('')
    /*生成签名串，使用 HMAC-SHA1 算法对上一步中获得的签名原文字符串进行签名，然后将生成的签名串使用 Base64 进行编码*/
    let SecretKey = TENCENT_CONF.SecretKey
    var sign = CryptoJS.HmacSHA1(str, SecretKey)
    sign = CryptoJS.enc.Base64.stringify(sign)
    //qs对象中添加Signature
    qs.Signature = sign

    return new Promise((resolve, reject)=>{
        request({
            url: 'https://' + SMS_API,
            qs
        },function(error, response, body) {
            resolve(body)
        })
    });
}
module.exports = {
    sendCode
}