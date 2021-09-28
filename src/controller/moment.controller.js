const {createMoment} = require('../service/moment.service')
const {getOneMomentById,getMomentLise,updateMoment,removeMoment} = require('../service/moment.service')

class MomentController {
    async create(ctx,next) {
        const id = ctx.user.id

        const content = ctx.request.body.content

        const res = await createMoment({id,content})
        
        ctx.body = res
    }
    async getAmoment(ctx,next) {
        const momentid = ctx.params.momentid
        const res = await getOneMomentById(momentid)

        ctx.body = res
    }
    async getMomentLises(ctx,next) {
        const {offset,size} = ctx.params
        const res = await getMomentLise(offset,size)

        ctx.body = res
    }

    async update(ctx,next) {
        const {momentId} = ctx.params
        const {content} = ctx.request.body
        const res = await updateMoment(content,momentId)
        ctx.body = res
    }

    async remove(ctx,next) {
        const {momentId} = ctx.params
        const res = await removeMoment(momentId)
        ctx.body = res
    }
}

module.exports = new MomentController()