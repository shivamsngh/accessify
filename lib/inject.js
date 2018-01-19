'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _accessifyService = require('./services/accessify-service');

var _accessifyService2 = _interopRequireDefault(_accessifyService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InjectComponent = function () {
	// just place a div at top right
	function InjectComponent() {
		_classCallCheck(this, InjectComponent);

		console.log(_accessifyService2.default);
		this.api = new _accessifyService2.default();
	}

	_createClass(InjectComponent, [{
		key: 'getImageDesc',
		value: function getImageDesc() {
			var images = document.getElementsByTagName('img');
			console.log("IMages", images);
			console.log("APiService");
			this.api.getImageDescription({ domain: 'https://www.google.com', region: 'India' }).then(function (success) {
				console.log("Success", success);
			});
		}

		// alert('inserted self... giggity');

	}]);

	return InjectComponent;
}();

var injector = new InjectComponent();
injector.getImageDesc();