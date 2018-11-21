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
var service_1 = __webpack_require__(2);
exports.Service = service_1.Service;
var requests_1 = __webpack_require__(9);
exports.requests = requests_1.requests;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = __webpack_require__(5);
exports.Service = service_1.Service;
var requests_1 = __webpack_require__(6);
exports.requests = requests_1.requests;
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var service_base_1 = __webpack_require__(3);
var data_1 = __webpack_require__(4);
var toast_1 = __webpack_require__(7);
var menu_1 = __webpack_require__(8);
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    /**
     * Constructor
     */
    function Service() {
        var _this = _super.call(this) || this;
        _this._data = new data_1.Data();
        _this._toast = new toast_1.Toast();
        _this._menu = new menu_1.Menu();
        return _this;
    }
    Object.defineProperty(Service.prototype, "data", {
        /**
         * Returns all data methods
         */
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "toast", {
        /**
         * Returns all toast methods
         */
        get: function () {
            return this._toast;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "menu", {
        /**
         * Returns all menu methods
         */
        get: function () {
            return this._menu;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Provides Surix singleton
     */
    Service.init = function () {
        if (Service.instance == undefined) {
            Service.instance = new Service();
        }
        return Service.instance;
    };
    Service.instance = undefined;
    return Service;
}(service_base_1.ServiceBase));
exports.Service = Service;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceBase = /** @class */ (function () {
    function ServiceBase() {
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
    ServiceBase.prototype.request = function (type, payload) {
        return this.rpc(type, payload);
    };
    /**
     * An event listener wrapper
     * @param eventName A string representing the event name
     * @param handler a function that handles event
     */
    ServiceBase.prototype.on = function (eventName, handler) {
        document.addEventListener("" + this.prefix + eventName, handler);
    };
    /**
     * Sends the specified message to Surix
     * @param msg Message to send to Surix
     */
    ServiceBase.prototype.sendMessage = function (msg) {
        window.parent.postMessage(msg, '*');
    };
    /**
     * Creates a promise then sends the message
     * @param name Name of the request to send to Surix
     * @param body
     */
    ServiceBase.prototype.rpc = function (name, body) {
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
    ServiceBase.prototype.handleRpcReq = function (msg, handler) {
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
    ServiceBase.prototype.emit = function (msg) {
        var event = new CustomEvent("" + this.prefix + msg.name, { detail: msg });
        document.dispatchEvent(event);
    };
    /**
     * Sets up Surix service
     */
    ServiceBase.prototype.setUpService = function () {
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
    return ServiceBase;
}());
exports.ServiceBase = ServiceBase;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(0);
var dist_1 = __webpack_require__(1);
var Data = /** @class */ (function () {
    function Data() {
        this._service = __1.Service.init();
    }
    /**
     * Saves an entity in Surix
     * @param entity EntityData entity to be saved
     * @returns Promise<PersistedEntityData>
     */
    Data.prototype.createEntity = function (entity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.createEntity, entity)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns the current project
     * @returns Promise<Project>
     */
    Data.prototype.project = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.project)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all the entities present
     * @param query (Optional) query
     * @returns Promise<PersistedEntityData[]>
     */
    Data.prototype.getEntities = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.getEntities, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns an entity identified by the id provided
     * @param id Surix Id
     * @returns Promise<PersistedEntityData>
     */
    Data.prototype.getEntityById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.getEntityById, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds tags to an existing entity
     * @param params Parameters to add tags
     * @returns Promise<PersistedEntityData>
     */
    Data.prototype.addTagsToEntity = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.addTagsToEntity, params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes tags from an entity
     * @param params TagsParams tag parameters
     */
    Data.prototype.removeTagsFromEntity = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.removeTagsFromEntity, params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates tags on an existing entity
     * @param params Update params
     */
    Data.prototype.updateTag = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.updateTag, params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all the tags available
     * @returns Promise<Tag[]>
     */
    Data.prototype.getTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.getTags)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Data.prototype.getAppData = function () {
    };
    Data.prototype.updateAppData = function () {
    };
    /**
     * Creates a file on Surix linked to the current project.
     * @param file FileMessage message details
     * @returns Promise<FileDetails>
     */
    Data.prototype.createFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.createFile, file)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a file associated with the id provided
     * @param id string Surix Id
     * @returns Promise<FileDetails>
     */
    Data.prototype.getFileById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.getFileById, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns all files
     * @returns Promise<FileDetails[]>
     */
    Data.prototype.getFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.request(dist_1.requests.data.getFiles)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Data;
}());
exports.Data = Data;


/***/ }),
/* 5 */
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
//# sourceMappingURL=service.js.map

/***/ }),
/* 6 */
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
//# sourceMappingURL=requests.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(0);
var dist_1 = __webpack_require__(1);
var Toast = /** @class */ (function () {
    function Toast() {
        this._service = __1.Service.init();
    }
    /**
     * Displays the message provided on toast on Surix
     * @param message ToastMessage message to show on the toast
     */
    Toast.prototype.show = function (message) {
        return this._service.request(dist_1.requests.toast.show, message);
    };
    return Toast;
}());
exports.Toast = Toast;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = __webpack_require__(1);
var Menu = /** @class */ (function () {
    function Menu() {
        this._service = dist_1.Service.init();
    }
    /**
     * Populates Surix app menu with the provided items
     * @param menu MenuItem[] menu items
     */
    Menu.prototype.populate = function (menu) {
        return this._service.request(dist_1.requests.menu.populate, menu);
    };
    return Menu;
}());
exports.Menu = Menu;


/***/ }),
/* 9 */
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
        createFile: 'data.createFile',
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