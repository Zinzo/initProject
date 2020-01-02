import querystring from 'query-string';
import http from './http';
import { AxiosPromise } from 'axios';

function request(props: any): AxiosPromise {
    const {
        init,
        query,
        endPoint,
        body,
    } = props;

    let strQuery = query ? `?${querystring.stringify(query)}` : '',
        fetchUrl = `${endPoint}/${strQuery}`;

    try {
        return http({
            url: fetchUrl,
            method: init.method,
            data: body
        });
    } catch(err) {
        return Promise.reject(err);
    }
}

const Api = {
    GET: ({endPoint, query}: any) => {
        return request({
            endPoint,
            init: {
                method: 'GET'
            },
        });
    },

    POST: ({endPoint, body}: any) => {
        return request({
            endPoint,
            init: {
                method: 'POST'
            },
            body
        })
    },

    PUT: ({endPoint, body}: any) => {
        return request({
            endPoint,
            init: {
                method: 'PUT',
            },
            body
        });
    },

    DELETE: ({endPoint, body}: any) => {
        return request({
            endPoint,
            init: {
                method: 'DELETE',
            },
            body,
        });
    },
}

export default Api;