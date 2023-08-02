import Koa from 'koa';
import routers from './routers';

const app = new Koa();
app.use(routers.routes());

app.listen(3000, () => {
    console.log('start....');
});
