import Router from 'koa-router';
import userRouter from './user';
import {Context} from 'koa';
const router = new Router();

router.use('/user', userRouter.routes());
router.get('/ping', (ctx: Context) => ctx.body = 'pong');

export default router;
