import {Context} from 'koa';

namespace UserService {
    export const getUser = (ctx: Context) => {
        ctx.body = '';
    };
}

export default UserService;
