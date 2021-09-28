const errorTypes = require('../constants/error-types')
const errorHandler = (error,ctx) => {
    let status,message;

    switch (error.message) {
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400
            message = "用户名或者密码不能为空"
            break
        case errorTypes.USER_ALLREADY_EXISTS:
            status = 409
            message = "用户名已被注册"
            break
        case errorTypes.USER_NOT_EXIST:
            status = 400
            message = "用户不存在"
            break
        case errorTypes.PASSWORD_IS_NOT_SURE:
            status = 400
            message = "密码错误"
            break
        case errorTypes.UN_AUTHORIZED:
            status = 401
            message = "未授权"
            break
        case errorTypes.UN_POSER:
            status = 401
            message = "你没有操作权限"
            break
        default :
            status = 404
            message = "NOT-FOUND" 
    }

    ctx.status = status

    ctx.body = message
}

module.exports = errorHandler
