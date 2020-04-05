const {SMS_CONF} =require("../conf/serve")
const QcloudSms = require("qcloudsms_js");
let appid = SMS_CONF.appid;  // SDK AppID 以1400开头
// 短信应用 SDK AppKey
let appkey = SMS_CONF.appkey;
// 短信模板 ID，需要在短信控制台中申请
let templateId = SMS_CONF.templateId;  // NOTE: 这里的模板ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
// 签名
let smsSign = SMS_CONF.smsSign  // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请
// 实例化 QcloudSms
let qcloudsms = QcloudSms(appid, appkey);
// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
function callback(err, res, resData) {
  if (err) {
      console.log("err: ", err);
      return err
  } else {
      console.log("response data: ", resData);
      return resData
  }
}
/**
 * 发送验证码
 * @param {string} phone 手机号
 * @param {string} code 验证码
 */
async function sendCode(phone,code){
  // 需要发送短信的手机号码
  let phoneNumbers = [phone];
  let ssender = qcloudsms.SmsSingleSender();
  let params = [code];
  let resdata=await ssender.sendWithParam("86", phoneNumbers[0], templateId,
  params, smsSign, "", "",callback); 
  console.log('-------')

  console.log(resdata)

  return data
}
module.exports = {
  sendCode
}
