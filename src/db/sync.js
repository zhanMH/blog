/**
 * @description sequelize 同步数据库
 * @author 初玖
 */

const seq = require('./seq')

require('./model/index')
// 测试连接
seq.authenticate().then(() => {
    console.log('auth ok')
}).catch((e) => {
    console.log('auth err')
})

// 标准同步
// 数据库中不存在与模型相同的数据表才同步
// seq.sync() 
// 
// 动态修改
// 修改同名数据表结构
//seq.sync({alter:true})
// 
// 强制同步
// 删除同名数据表后同步，会导致之前的数据丢失
//seq.sync({force:true})
// 
// 执行同步
seq.sync({alter:true}).then(() => {
    console.log('sync ok')
    process.exit()
})
