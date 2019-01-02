const request = require('request');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const humps = require('humps');

class Core { 

    constructor(options){
        console.log('OPS:',options)
        this.servelrUrl = options.url;
        this.apiVersion = options.version;
        this.oauth = OAuth({
            consumer: {
                key: options.consumerKey,
                secret: options.consumerSecret
            },
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return crypto.createHmac('sha1', key).update(base_string).digest('base64');
            }
        });
        this.token = {
            key: options.accessToken,
            secret: options.accessTokenSecret
        };
    }

    apiCall(options, cb) {

        const self = this;

        const {
            url,
            method,
            body
        } = options;

        console.log('Calling API endpoint: ',method,' ',url, ' ', self.token);

        console.log('HEADER:', self.token);

        const headers = self.oauth.toHeader(self.oauth.authorize(options, self.token));

        console.log('HEADER:', headers);

        request({
            url,
            method,
            headers,
            json: true,
            body,
        }, (error, response, body)=>{
            console.log('Response received.');
            if (error) {
                console.log('Error occured: ',error);
                return cb(error);
            }
            
            if (!self.httpCallSucceeded(response)) {
                const errorMessage = self.errorString(body.message, body.parameters);
                console.log('API call failed error: ',error);
                console.log('API call failed body: ',body);
                console.log('API call failed failed: ',errorMessage);
                return cb(errorMessage);
            }

            const bodyCamelized = humps.camelizeKeys(body);

            cb(null, bodyCamelized);
        });
    }

    httpCallSucceeded(response) {
        return response.statusCode >= 200 && response.statusCode < 300;
    }

    errorString(message, parameters) {
        if (parameters === null) {
            return message;
        }
        if (parameters instanceof Array) {
            for (var i = 0; i < parameters.length; i++) {
                var parameterPlaceholder = '%' + (i + 1).toString();
                message = message.replace(parameterPlaceholder, parameters[i]);
            }
        } else if (parameters instanceof Object) {
            for (var key in parameters) {
                var parameterPlaceholder = '%' + key;
                message = message.replace(parameterPlaceholder, parameters[key]);
            }
        }

        return message;
    }

    get(data, cb) {
        const self = this;

        const {
            url
        } = data;

        const options = {
            url: self.createUrl(url),
            method: 'GET'
        };
        return self.apiCall(options, cb);
    }

    post(data, cb) {
        const self = this;

        const {
            url, 
            order,
            body
        } = data;

        const options = {
            url: self.createUrl(url),
            method: 'POST',
            body
        };
        return self.apiCall(options, cb);
    }

    put(data, cb) {
        const self = this;

        const {
            url, 
            order,
            body
        } = data;

        const options = {
            url: self.createUrl(url),
            method: 'PUT',
            body
        };
        return self.apiCall(options, cb);
    }

    delete(data) {
        const self = this;

        const {
            url, 
            order,
            body
        } = data;
        
        const options = {
            url: self.createUrl(url),
            method: 'DELETE'
        };
        return self.apiCall(options, cb);
    }

    createUrl(url) {
        return this.servelrUrl + '/' + this.apiVersion + url;
    }
}

module.exports = Core;
