"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API_URL = "http://52.224.178.135/api";

var ApiService = function () {
    function ApiService() {
        _classCallCheck(this, ApiService);
    }

    _createClass(ApiService, null, [{
        key: "getImageDescription",
        value: function getImageDescription(object) {
            var _this = this;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (_this.readyState === 4 && _this.status == 200) {
                    console.log(xhttp.responseText);
                }
            };
            xhttp.open("GET", API_URL + "/getImageDescription?domain=" + object.domain + "&region=" + object.region, true);
            xhttp.send();
        }
    }]);

    return ApiService;
}();

exports.default = ApiService;