/**
 * @description 用户数据模型
 * @author 初玖
 */

const seq = require('../seq')

// users
const User = seq.define('user', {
    userName: {
        type: Sequelize.STRING,//类型
        allowNull: false,//是否可以为空
        unique: true,//是否唯一
        comment: '用户名，唯一'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '密码'
    },
    nickName: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '昵称'
    },
    gender: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 3,
        comment: '性别（1 男性，2 女性，3 保密）'
    },
    picture: {
        type: Sequelize.STRING,
        comment: '头像，图片地址'
    },
    city: {
        type: Sequelize.STRING,
        comment: '城市'
    }
})

module.exports = User
