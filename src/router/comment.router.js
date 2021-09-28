const Router = require('koa-router');

const commentRouter = new Router({ prefix: '/comment' });

const { verifyAuth } = require('../middleware/auth.middeware');
const { create, reply, update } = require('../controller/comment.controller');
// 发表评论
commentRouter.post('/', verifyAuth, create);

commentRouter.post('/:commentId/reply', verifyAuth, reply);

commentRouter.patch('/:commentId', verifyAuth, update);

module.exports = commentRouter;
