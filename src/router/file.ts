import {CWD_PATH} from '../config';
import {FileController} from '../controller/FileController';
import {koaBody} from 'koa-body';
import Router from 'koa-router';
import {resolve} from 'path';

const router = new Router();
router.post('/add', koaBody({
    multipart: true,
    formidable: {
        keepExtensions: true,
        uploadDir: resolve(CWD_PATH, 'public/assets/')
    }
}), FileController.addFile);
router.post('/file/del', FileController.delFile);
router.post('/file/upload', FileController.setFile);
router.get('/file/list', FileController.getFileList);
router.post('/file/submit', FileController.submitFile);

export default router;
