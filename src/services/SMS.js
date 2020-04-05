/**
 * @description user service
 * @author chujiu
 */

const { SMS } = require('../db/model/index')

/**
 * 创建用户
 * @param {string} phone 手机号
 * @param {string} code 验证码
 */
async function createSMSCode({code,phone}){
    const result=await SMS.create({
        code,
        phone
    })
    const data=result.dataValues
    return data
}


module.exports = {
    createSMSCode
}
