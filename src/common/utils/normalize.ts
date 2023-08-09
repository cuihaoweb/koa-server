import {isArray, isEmpty} from 'lodash';

export const normalizeArray = <T>(data: T) => {
    if (isEmpty(data)) {
        return [];
    }
    return isArray(data) ? data : [data];
};
