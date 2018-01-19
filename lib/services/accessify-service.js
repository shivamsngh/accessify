"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_URL = "http://52.224.178.135/api";
var API_URL_TEST = "http://localhost:3000/api";

var ApiService = function () {
    function ApiService() {
        _classCallCheck(this, ApiService);
    }

    _createClass(ApiService, [{
        key: "getImageDescription",
        value: function getImageDescription(object) {
            console.log("Get desc object", object);
            return new Promise(function (resolve, reject) {
                var xhttp = new XMLHttpRequest();
                xhttp.onload = function () {
                    console.log("thi status", this.status);
                    if (this.status >= 200 && this.status < 300) {
                        console.log("response", xhttp.responseText);
                        resolve(xhttp.response);
                    }
                };

                xhttp.onerror = function () {
                    console.log("Onerror", xhttp);
                    reject({ status: this.status, statusText: xhttp.statusText });
                };

                xhttp.open("GET", API_URL_TEST + "/getImageDescription?domain=" + object.domain + "&region=" + object.region);
                xhttp.send();
            });
        }
    }]);

    return ApiService;
}();

exports.default = ApiService;