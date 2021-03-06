"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config_1 = require("./config");
var request = require("request");

var URL = function () {
    /**
     * Creates an URL object
     * @param {string} username - XFE API Username
     * @param {string} password - XFE API Password
     */

    function URL(username, password) {
        _classCallCheck(this, URL);

        this.request = request.defaults({
            baseUrl: config_1.apiUrl,
            auth: {
                user: username,
                pass: password
            }
        });
    }
    /**
     * Get URL Threat Intelligence
     * @param {string} url - URL to search for
     * @returns {Promise<T>} Returns a promise with the response
       */


    _createClass(URL, [{
        key: "get",
        value: function get(url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.request({
                    uri: "/url/" + url
                }, function (error, response, body) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(body);
                    }
                });
            });
        }
    }]);

    return URL;
}();

exports.URL = URL;