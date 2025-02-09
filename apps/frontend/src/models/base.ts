interface Response<T> {
    data: T;
}

interface Actions<T> {
    payload: T;
    type: string;
}


export type { Response,Actions}