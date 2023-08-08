import fs from 'fs';
import {resolve} from 'path';

export namespace FileDao {
    const PUBLIC_PATH = resolve(CWD_PATH, './public');

    export const getFileList = (options: {
        groupName: string
    }) => {
        const {groupName} = options;
        const files = fs.readdirSync(resolve(PUBLIC_PATH, groupName));
        // fs.statSync(files).isDirectory();
    };
}
