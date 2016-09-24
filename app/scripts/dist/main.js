(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
	_classCallCheck(this, ChatApp);

	_wsClient2.default.init('ws://localhost:3001');
	_wsClient2.default.registerOpenHandler(function () {
		var message = new ChatMessage({ message: 'pow!' });
		_wsClient2.default.sendMessage(message.serialize());
	});
	_wsClient2.default.registerMessageHandler(function (data) {
		console.log(data);
	});
};

var ChatMessage = function () {
	function ChatMessage(_ref) {
		var m = _ref.message;
		var _ref$user = _ref.user;
		var u = _ref$user === undefined ? 'batman' : _ref$user;
		var _ref$timestamp = _ref.timestamp;
		var t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

		_classCallCheck(this, ChatMessage);

		this.message = m;
		this.user = u;
		this.timestamp = t;
	}

	_createClass(ChatMessage, [{
		key: 'serialize',
		value: function serialize() {
			return {
				user: this.user,
				message: this.message,
				timestamp: this.timestamp
			};
		}
	}]);

	return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var socket = void 0;

function init(url) {
	socket = new WebSocket(url);
	console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
	socket.onopen = function () {
		console.log('open');
		handlerFunction();
	};
}

function registerMessageHandler(handlerFunction) {
	socket.onmessage = function (e) {
		console.log('message', e.data);
		var data = JSON.parse(e.data);
		handlerFunction(data);
	};
}

function sendMessage(payload) {
	socket.send(JSON.stringify(payload));
}

exports.default = {
	init: init,
	registerOpenHandler: registerOpenHandler,
	registerMessageHandler: registerMessageHandler,
	sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcYXBwLmpzIiwiYXBwXFxzY3JpcHRzXFxzcmNcXG1haW4uanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0wsbUJBQWM7QUFBQTs7QUFDYixvQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSxvQkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQ2hDLE1BQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBRSxTQUFTLE1BQVgsRUFBaEIsQ0FBZDtBQUNBLHFCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0EsRUFIRDtBQUlBLG9CQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3ZDLFVBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxFQUZEO0FBR0EsQzs7SUFHSSxXO0FBQ0wsNEJBSUc7QUFBQSxNQUhPLENBR1AsUUFIRixPQUdFO0FBQUEsdUJBRkYsSUFFRTtBQUFBLE1BRkksQ0FFSiw2QkFGTSxRQUVOO0FBQUEsNEJBREYsU0FDRTtBQUFBLE1BRFMsQ0FDVCxrQ0FEWSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDWDs7QUFBQTs7QUFDRixPQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBOzs7OzhCQUNXO0FBQ1gsVUFBTztBQUNOLFVBQU0sS0FBSyxJQURMO0FBRU4sYUFBUyxLQUFLLE9BRlI7QUFHTixlQUFXLEtBQUs7QUFIVixJQUFQO0FBS0E7Ozs7OztrQkFHYSxPOzs7OztBQ2xDZjs7Ozs7O0FBQ0E7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDbEIsVUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxTQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUM3QyxRQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNyQixVQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDQSxFQUhEO0FBSUE7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRDtBQUNoRCxRQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDekIsVUFBUSxHQUFSLENBQVksU0FBWixFQUF1QixFQUFFLElBQXpCO0FBQ0EsTUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFYO0FBQ0Esa0JBQWdCLElBQWhCO0FBQ0EsRUFKRDtBQUtBOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM3QixRQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDQTs7a0JBRWM7QUFDZCxXQURjO0FBRWQseUNBRmM7QUFHZCwrQ0FIYztBQUlkO0FBSmMsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50JztcclxuXHJcbmNsYXNzIENoYXRBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcclxuXHRcdHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2UoeyBtZXNzYWdlOiAncG93IScgfSk7XHJcblx0XHRcdHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcclxuXHRcdH0pO1xyXG5cdFx0c29ja2V0LnJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIENoYXRNZXNzYWdlIHtcclxuXHRjb25zdHJ1Y3Rvcih7XHJcblx0XHRtZXNzYWdlOiBtLCBcclxuXHRcdHVzZXI6IHU9J2JhdG1hbicsIFxyXG5cdFx0dGltZXN0YW1wOiB0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgXHJcblx0fSkge1xyXG5cdFx0dGhpcy5tZXNzYWdlID0gbTtcclxuXHRcdHRoaXMudXNlciA9IHU7XHJcblx0XHR0aGlzLnRpbWVzdGFtcCA9IHQ7XHJcblx0fVxyXG5cdHNlcmlhbGl6ZSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHVzZXI6IHRoaXMudXNlcixcclxuXHRcdFx0bWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG5cdFx0XHR0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwOyIsImltcG9ydCBDaGF0QXBwIGZyb20gJy4vYXBwJztcclxubmV3IENoYXRBcHAoKTsiLCJsZXQgc29ja2V0O1xyXG5cclxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcclxuXHRzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcblx0Y29uc29sZS5sb2coJ2Nvbm5lY3RpbmcuLi4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJPcGVuSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcclxuXHRzb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ29wZW4nKTtcclxuXHRcdGhhbmRsZXJGdW5jdGlvbigpO1xyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XHJcblx0c29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnbWVzc2FnZScsIGUuZGF0YSk7XHJcblx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuXHRcdGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKSB7XHJcblx0c29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aW5pdCxcclxuXHRyZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG5cdHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXHJcblx0c2VuZE1lc3NhZ2VcclxufSJdfQ==
