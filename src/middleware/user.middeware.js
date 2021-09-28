const errorTypes = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/md5password')
const verifyUser = async (ctx,next) => {
    const {name,password} = ctx.request.body

    if(!name || !password || name === "" || password === "") {
        const err = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',err,ctx)
    }

    let res = await service.getUserByName(name)
    
    if(res.length) {
        const err = new Error(errorTypes.USER_ALLREADY_EXISTS)
        return ctx.app.emit('error',err,ctx)
    }

    await next()
}

const handelPassword = async (ctx,next) => {
    const {password} = ctx.request.body
    ctx.request.body.password = md5password(password)
    await next()
}

module.exports = {
    verifyUser,
    handelPassword
}