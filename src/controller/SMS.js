/**
 * @description user controller
 * @author 初玖
 */

const {
    getUserInfo,
    createUser
} = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {randomNum} =require('../utils/randomNum')
const {sendCode} =require('../utils/SMS')
const {
    registerUserNameNotExistInfo,
    registerUserNameExistInfo,
    registerFailInfo,
} = require('../model/ErrorInfo')

/**
 * 发送验证码
 * @param {string} phone 手机号
 */
async function send(phone) {
    let code = randomNum(1000,9999)
    let codeRes= await sendCode(phone,code)
    console.log("============")

    console.log(codeRes)
    // const userInfo = await getUserInfo(userName)
    // if (userInfo) {
    //     // { errno: 0, data: {....} }
    //     return new SuccessModel(userInfo)
    // } else {
    //     // { errno: 10003, message: '用户名未存在' }
    //     return new ErrorModel(registerUserNameNotExistInfo)
    // }
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
