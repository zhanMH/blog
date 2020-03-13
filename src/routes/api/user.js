/**
 * @description user API 路由
 * @author 初玖
 */

 const router= require('koa-router')()
 const {
    isExist,
    register
} = require('../../controller/user')
 router.prefix('/api/user')

//  注册
router.post('/register',async (ctx,next)=>{
    const{userName,password,phone}=ctx.request.body
    console.log(userName,password,phone)
    ctx.body={phone,userName,password}
    // console.log(ctx.request)
})

module.exports = router