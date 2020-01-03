interface HttpInterface {
    endPoint:string;
}

export interface GetInterface extends HttpInterface {
    query?:Object;
}

export interface PostInterface  extends HttpInterface {
    body: string;    
};

export interface HttpResponseInterface {
    header:object;
    data:object;
    request:object;
}
