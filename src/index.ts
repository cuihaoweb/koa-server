import Koa from 'koa';
import routers from '@/router';
import {koaBody} from 'koa-body';

const app = new Koa();
app.use(koaBody());
app.use(routers.routes());

app.listen(3000, () => {
    console.log('start....');
});
