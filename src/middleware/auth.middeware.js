const errorTypes = require('../constants/error-types')
const UserService = require('../service/user.service')
const AuthService = require("../service/auth.service")
const md5password = require('../utils/md5password')
const jwt = require('jsonwebtoken')
const {PUBLIC_KEY} = require('../app/config')
const verifyLogin =async (ctx,next) => {
    const {name,password} = ctx.request.body

    if(!name || !password || name === "" || password === "") {
        const err = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error',err,ctx)
    }
    
    const result = await UserService.getUserByName(name)

    const user = result[0]

    if(!user) {
        const err = new Error(errorTypes.USER_NOT_EXIST)
        return ctx.app.emit('error',err,ctx)
    }

    if(user.password !== md5password(password)) {
        const err = new Error(errorTypes.PASSWORD_IS_NOT_SURE)
        return ctx.app.emit('error',err,ctx)
    }

    ctx.user = user

    await next()
}

const verifyAuth =async (ctx,next) => {
    const authorization = ctx.headers.authorization
    // 验证token
    const token = authorization.replace("Bearer ","")
    try{
       const result = jwt.verify(token,PUBLIC_KEY,{
            algorithms:['RS256']
        })
        ctx.user = result
        await next()
    }
    catch(err) {
        console.log(err);
        const error = new Error(errorTypes.UN_AUTHORIZED)
        ctx.app.emit('error',error,ctx)
    }
}

const verifyPower = async(ctx,next) => {
    const {momentId} = ctx.request.params
    const {id} = ctx.user
    const isPass = await AuthService.checkMoment(momentId,id)
    if(!isPass) {
        const error = new Error(errorTypes.UN_POSER)
        ctx.app.emit('error',error,ctx)
    }else {
         await next()
    }
   
}

module.exports ={ verifyLogin,verifyAuth,verifyPower}