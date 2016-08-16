import { message } from 'antd';
import Cache from './Cache';
import es6Promise from 'es6-promise';
// require('whatwg-fetch')
const API_URL = '';

es6Promise.polyfill();


class Http {

    get(url, params, options) {
        params = params ? params : '';
        return this.request(url, 'GET', params, options);
    }

    post(url, params, options) {
        return this.request(url, 'POST', params, options);
    }

    put(url, params, options) {
        return this.request(url, 'PUT', params, options);
    }

    patch(url, params, options) {
        return this.request(url, 'PATCH', params, options);
    }

    delete(url, params, options) {
        return this.request(url, 'DELETE', params, options);
    }
    upload(url, params, options) {
        return this.request(url, 'upload', params, options);
    }
    request(url, method, params) {
        url = API_URL + url;
        let token = Cache.get('token');
        //let defaults = {
        //    url: url,
        //    method: method,
        //    data : params,
        //    dataType: 'json',
        //    xhrFields: {
        //        withCredentials: false
        //    },
        //    crossDomain: true,
        //    headers: {
        //        Authorization: 'token ' + token
        //    }
        //};
        //console.log(JSON.stringify(params));
        //options = $.extend(options, defaults);
        //let res = $.ajax(options);
        //res.fail((e)=>{
        //    console.log(e.responseJSON);
        //    if(e.responseJSON && e.responseJSON.msg){
        //        message.error(e.responseJSON.msg, 5);
        //    }else{
        //        message.error('请求失败: '+ e.statusText);
        //    }
        //});
        let defaults = {
            method: method,
            headers: {
                'Authorization': 'token ' + token,
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        };
        if (method === 'POST' || method === 'PATCH'|| method === 'DELETE') {
            defaults = {
                method: method,
                body: JSON.stringify(params),
                headers: {
                    'Authorization': 'token ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            };
        }
        else if (method === 'upload') {
            defaults = {
                method: 'post',
                body: params,
                headers: {
                    'Authorization': 'token ' + token
                },
                mode: 'cors'
            };
        }
        else {
            if (params && typeof params === 'object') {
                let u = [];
                let number = 0;
                Object.keys(params).map((key) => {
                    u.push(key);
                    u.push('=');
                    if (params[key]) {
                        u.push(params[key]);
                        number++;
                    }

                    u.push('&');
                });
                if (number > 0) {
                    url = url + '?' + u.join('');
                }
            }
        }
        let res = fetch(url, defaults)
            .then(function (response) {
                if (response.status === 413) {
                    response.msg = '上传文件内容太大';
                    return response;
                }
                else {
                    return response.json();
                }
            }).then(function (res) {
            if (res.code === 1400 || res.code === 1401 || res.code === 1403 ) {
                message.error('用户名过期');
                location.href = '/login';
                return {
                    msg: '用户名过期',
                    data: {}
                };
            }
            else {
                return res;
            }

        })
            .catch(function (ex) {
                console.log('parsing failed', ex);
                return {
                    msg: '请求失败'
                };
            });
        res.success = res.then;
        return res;
    }
}

export default new Http();
