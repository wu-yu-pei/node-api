const Router = require('koa-router')

const momentRouter = new Router({prefix:'/moment'})

const {
    create,
    getAmoment,
    getMomentLises,
    update,
    remove
} = require('../controller/moment.controller')

const {
    verifyAuth,
    verifyPower
} = require('../middleware/auth.middeware')

momentRouter.post('/',verifyAuth,create)

momentRouter.get('/:momentid',getAmoment)

momentRouter.get('/:offset/:size',getMomentLises)
// 修改评论
momentRouter.patch('/:momentId',verifyAuth,verifyPower,update)

// 删除评论
momentRouter.delete('/:momentId',verifyAuth,verifyPower,remove)

module.exports = momentRouter