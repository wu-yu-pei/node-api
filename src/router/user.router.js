const Router = require('koa-router')

const userRouter = new Router({prefix:'/users'})

const {create} = require('../controller/user.controller')
const {verifyUser,handelPassword} = require('../middleware/user.middeware')

//3个中间件 验证用户 加密密码 创建用户
userRouter.post('/',verifyUser,handelPassword,create)

module.exports = userRouter