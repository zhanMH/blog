/**
 * @description user controller
 * @author 初玖
 */

const {
    createSMSCode
} = require('../services/SMS')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {randomNum} =require('../utils/randomNum')
const {sendCode} =require('../utils/tencentSMS')

const {
    SMSSendingFailed,
    registerUserNameExistInfo,
    registerFailInfo,
} = require('../model/ErrorInfo')

/**
 * 发送验证码
 * @param {string} phone 手机号
 */
async function send(phone) {
    let code = randomNum(1000,9999)
    console.log(code)
    let resData= await sendCode(phone,code)
    resData=JSON.parse(resData).Response
    // return new SuccessModel(resData.SendStatusSet[0])
    console.log(resData.SendStatusSet[0])
    if(resData.SendStatusSet[0].Code!="Ok"){
        return new ErrorModel(SMSSendingFailed)
    }
    try {
        await createSMSCode({code,phone})
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(SMSSendingFailed)
    }
}

/**
 * 注册
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} phone 手机号
 */
async function register({ userName, password, phone }) {
    const userInfo = await getUserInfo(userName)
    if (userInfo) {
        // 用户名已存在
        return new ErrorModel(registerUserNameExistInfo)
    }

    try {
        await createUser({
            userName,
            password:doCrypto(password),
            phone
        })
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return new ErrorModel(registerFailInfo)
    }
}

module.exports = {
    send
}
