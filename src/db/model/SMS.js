/**
 * @description 短信验证码数据模型
 * @author 初玖
 */

const seq = require('../seq')
const { INTEGER} = require('../types')

// users
const MSM = seq.define('MSM', {
    phone: {
        type: INTEGER,
        allowNull: false,
        comment: '手机'
    },
    code: {
        type: INTEGER,
        allowNull: false,
        comment: '验证码'
    },
})

module.exports = MSM
