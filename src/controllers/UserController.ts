import {Context} from 'koa';

namespace UserController {
    export const getName = (ctx: Context) => {
        ctx.body = 'username';
    };
}

export default UserController;
