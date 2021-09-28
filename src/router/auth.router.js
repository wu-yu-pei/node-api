const Router = require('koa-router')

const {login,success} = require('../controller/auth.controller')

const {verifyLogin,verifyAuth} = require('../middleware/auth.middeware')

const authRouter = new Router()

authRouter.post('/login',verifyLogin,login)

// 测试接口:是否授权登录
authRouter.get('/text', verifyAuth,success)

module.exports = authRouter