const koa = require('koa')

const  bodyParser = require('koa-bodyparser')

const useRouter = require('../router/index')

const errorHandler = require('./error-handler')

const app = new koa()

// 解析body参数中间件
app.use(bodyParser())

// 路由
useRouter(app)

// 监听error
app.on('error',errorHandler)
module.exports =  app