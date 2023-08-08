import {FileController} from '@/controller/FileController';
import Router from 'koa-router';

const router = new Router();
router.post('/file/add', FileController.addFile);
router.post('/file/del', FileController.delFile);
router.post('/file/upload', FileController.setFile);
router.get('/file/list', FileController.getFileList);
router.post('/file/submit', FileController.submitFile);

export default router;
