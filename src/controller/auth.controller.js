const jwt = require('jsonwebtoken')
const {PRIVATE_KEY} = require('../app/config')
class AutoController {
    async login(ctx,next) {
        const {id,name} = ctx.user
        // 造token
        const token = jwt.sign({id,name},PRIVATE_KEY,{
            algorithm:"RS256",
            expiresIn:60*60*24
        })
        ctx.body = {
            id,
            name,
            token
        }
        next()
    }
    async success(ctx,next) {
        ctx.body = "登录成功"
        next()
    }
}

module.exports = new AutoController()