/**
 * @description 短信验证码数据模型
 * @author 初玖
 */

const seq = require('../seq')
const { STRING,BOOLEAN} = require('../types')

// users
const SMS = seq.define('SMS', {
    phone: {
        type: STRING,
        allowNull: false,
        comment: '手机'
    },
    code: {
        type: STRING,
        allowNull: false,
        comment: '验证码'
    },
    state:{
        type: BOOLEAN,
        allowNull: false,
        comment: '验证码状态'
    }
})

module.exports = SMS
