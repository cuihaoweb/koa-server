import {ASSETS_DIR_NAME} from '@/common/config';
import {normalizeArray} from '@/common/utils/normalize';
import {WrapperResponse} from '@/common/utils/wrapperResponse';
import {Context} from 'koa';

export namespace FileController {
    export const addFile = (ctx: Context) => {
        // const {name} = ctx.request.body;
        const files = normalizeArray(ctx.request?.files?.file);

        if (!files.length) return ctx.body = WrapperResponse.error('file is not sure');

        ctx.body = WrapperResponse.success(
            files.map(item => ({
                name: item.originalFilename,
                url: `${ASSETS_DIR_NAME}/${item.newFilename}`
            }))
        );
    };

    export const delFile = (ctx: Context) => {
    };

    export const setFile = (ctx: Context) => {
    };

    export const getFileList = (ctx: Context) => {
    };

    export const submitFile = (ctx: Context) => {
    };
}
