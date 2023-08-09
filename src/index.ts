import Koa from 'koa';
import routers from './router';
import {koaBody} from 'koa-body';
import koaStatic from 'koa-static';
import {resolve} from 'path';
import {CWD_PATH} from './config';

const app = new Koa();
app.use(koaStatic(resolve(CWD_PATH, 'public')));
app.use(koaBody());
app.use(routers.routes());

app.listen(3000, () => {
    console.log('start....');
});
