import Koa from 'koa';
import routers from '@/router';

const app = new Koa();
app.use(routers.routes());

app.listen(3000, () => {
    console.log('start....');
});
