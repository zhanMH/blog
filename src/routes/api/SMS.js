/**
 * @description 短信验证码 API 路由
 * @author 初玖
 */

 const router= require('koa-router')()
 const {
    send
} = require('../../controller/SMS')
 router.prefix('/api/')

//  发送验证码
router.post('/sms',async (ctx,next)=>{
    const{phone}=ctx.request.body
    ctx.body={phone}
    ctx.body=await send(
        phone
    )
})

module.exports = router