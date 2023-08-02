import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/ping', ctx => {
    ctx.body = 'hello';
});

const app = new Koa();
app.use(router.routes());

app.listen(3000, () => {
    console.log('start....');
});
