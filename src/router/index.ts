import Router from 'koa-router';
import userRouter from './user';
import fileRouter from './file';
import {Context} from 'koa';
const router = new Router();

router.get('/ping', (ctx: Context) => ctx.body = 'pong');
router.use('/user', userRouter.routes());
router.use('/file', fileRouter.routes());

export default router;
