export namespace WrapperResponse {
    export const success = <T>(data: T) => {
        return {
            data,
            code: 200,
            message: ''
        };
    };

    export const error = (error: string) => {
        return {
            code: 500,
            data: '',
            message: error
        };
    };
}
