const UserService  = require('../service/user.service')

class UserController {
    create(ctx,next) {
        const user = ctx.request.body
        ctx.body ="创建用户成功"
        UserService.create(user)
    }
}

module.exports = new UserController()