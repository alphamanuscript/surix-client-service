(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Surix", [], factory);
	else if(typeof exports === 'object')
		exports["Surix"] = factory();
	else
		root["Surix"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = __webpack_require__(1);
exports.Service = service_1.Service;
var requests_1 = __webpack_require__(2);
exports.requests = requests_1.requests;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    /**
     * Constructor
     */
    function Service() {
        this.prefix = '__surix__';
        this.rpcTracker = {};
        this.setUpService();
    }
    /**
     * Sends a request to Surix
     * @param type Request type
     * @param payload Request payload
     * @returns Promise Returns a promise
     */
    Service.prototype.request = function (type, payload) {
        return this.rpc(type, payload);
    };
    /**
     * An event listener wrapper
     * @param eventName A string representing the event name
     * @param handler a function that handles event
     */
    Service.prototype.on = function (eventName, handler) {
        document.addEventListener("" + this.prefix + eventName, handler);
    };
    /**
     * Sends the specified message to Surix
     * @param msg Message to send to Surix
     */
    Service.prototype.sendMessage = function (msg) {
        window.parent.postMessage(msg, '*');
    };
    /**
     * Creates a promise then sends the message
     * @param name Name of the request to send to Surix
     * @param body
     */
    Service.prototype.rpc = function (name, body) {
        var _this = this;
        var reqId = Math.random();
        return new Promise(function (resolve, reject) {
            _this.rpcTracker[reqId] = { resolve: resolve, reject: reject };
            var message = {
                name: name,
                body: body,
                type: 'rpcReq',
                id: reqId
            };
            _this.sendMessage(message);
        });
    };
    /**
     * This handles the rpcReq type responses from Surix
     * @param msg Response from Surix
     * @param handler Handles the response
     */
    Service.prototype.handleRpcReq = function (msg, handler) {
        if (msg.success) {
            handler.rpcTracker[msg.id].resolve(msg.body);
        }
        else {
            handler.rpcTracker[msg.id].reject(msg.body);
        }
        // Remove the promise from the handler because 
        // it has already been taken care of.
        // delete handler.rpcTracker[msg.id];
    };
    /**
     * Emits a custom event
     * @param msg Message to be embedded to the custom event to be emitted
     */
    Service.prototype.emit = function (msg) {
        var event = new CustomEvent("" + this.prefix + msg.name, { detail: msg });
        document.dispatchEvent(event);
    };
    /**
     * Sets up Surix service
     */
    Service.prototype.setUpService = function () {
        var _this = this;
        window.addEventListener('message', function (event) {
            var msg = event.data;
            switch (msg.type) {
                case 'rpcRep':
                    _this.handleRpcReq(msg, _this);
                    break;
                case 'event':
                    _this.emit(msg);
                    break;
            }
        });
    };
    Service.init = function () {
        if (Service.instance == undefined) {
            Service.instance = new Service();
        }
        return Service.instance;
    };
    Service.instance = undefined;
    return Service;
}());
exports.Service = Service;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.requests = {
    data: {
        createEntity: 'data.createEntity',
        project: 'data.project',
        getEntities: 'data.getEntities',
        getEntityById: 'data.getEntityById',
        addTagsToEntity: 'data.addTagsToEntity',
        removeTagsFromEntity: 'data.removeTagsFromEntity',
        getTags: 'data.getTags',
        updateTag: 'data.updateTag',
        getAppData: 'data.getAppData',
        updateAppData: 'data.updateAppData',
        uploadFile: 'data.uploadFile',
        getFileById: 'data.getFileById',
        getFiles: 'data.getFiles'
    },
    toast: {
        show: 'toast.show',
    },
    menu: {
        populate: 'menu.populate'
    },
    events: {
        menuItemClicked: 'menu-item-clicked',
        // TODO: this is for backwards compatibility
        // it is deprecated and will be removed in a future update
        menuClicked: 'menu-item-clicked'
    }
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=client-service.js.map