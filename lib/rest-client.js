'use strict';
const axios = require('axios');

const { RestUnreachableError } = require('./rest-unreachable-error');
const { ValidationResults } = require('./validation');
const { ValidationError } = require('./validation-error');
const { RestError } = require('./rest-error');
const { RestPkiError } = require('./rest-pki-error');
const { VERSION } = require('./lib-version');

class RestClient {

   constructor(endpointUrl, accessToken=null, proxy = null) {
      this._endpointUrl = endpointUrl;
      this._accessToken = accessToken;
      this._proxy = proxy;

      let param = {
         baseURL: this._endpointUrl,
         json: true,
         responseType: "application/json"
      };

      let header = {
         'X-RestPki-Client': `NodeJS ${VERSION}`
      };

      if(this._accessToken){
         header['Authorization'] = `Bearer ${this._accessToken}`;
      }

      param['headers'] = header;
      if(this._proxy){
         param['proxy'] = this._proxy;
      }

      this._instance = axios.create(param);
   }

   get(url) {
      let verb = 'GET';
      return this._instance.get(url)
      .then(function (response){
         return response.data;
      })
      .catch(function (error) {
         if(error.request) {
            new RestUnreachableError(verb, url)
         } else if(error.response) {
            let errObj = {value: error.status};
            this._checkResponse(errObj, error, verb, url);
            return errObj;
         } else {
            return {value: error};
         }
      });
   }

   getRaw(url) {
      return new Promise((resolve, reject) => {
         let request = http.request(this._endpointUrl + url, function (res) {
            var data = [];
            res.on('data', function (chunk) {
                data.push(chunk);
            });
            res.on('end', function () {
               data = Buffer.concat(data);
               resolve(data);
            });
        });

        request.on('error', function (e) {
            reject(e.message);
         });
         request.end();
      });
   }

   getStream(url) {
      return http.request(this._endpointUrl + url);
   }

   post(url, data) {
      let verb = 'POST';
      return this._instance.post(url, data)
      .then(function (response){
         return response.data;
      })
      .catch(function (error) {
         if(error.request) {
            new RestUnreachableError(verb, url)
         } else if(error.response) {
            let errObj = {value: error.status};
            this._checkResponse(errObj, error, verb, url);
            return errObj;
         } else {
            return {value: error};
         }
      });
   }

   _checkResponse(errObj, restRes, verb, url) {
      try {
         let statusCode = restRes.status;
         let response = restRes.data;
         if (statusCode === 422 && response.code !== null) {
            if (response.code === 'ValidationError') {
               let vr = new ValidationResults(response.validationResults);
               errObj.value = new ValidationError(verb, url, vr);
            } else {
               errObj.value = new RestPkiError(verb, url, response.code,
                     response.detail);
            }
         } else {
            errObj.value = new RestError(verb, url, statusCode,
                  response.message);
         }
      } catch (error) {
         errObj.value = new RestError(verb, url);
      }
   }

}

exports.RestClient = RestClient;