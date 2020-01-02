module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/*! exports provided: WPContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WPContext", function() { return WPContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var WPContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
    url: '',
    headers: undefined
});


/***/ }),

/***/ "./src/hooks/useApiRequest.ts":
/*!************************************!*\
  !*** ./src/hooks/useApiRequest.ts ***!
  \************************************/
/*! exports provided: useApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApiRequest", function() { return useApiRequest; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./src/context.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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



var useApiRequest = function (_a) {
    var id = _a.id, options = _a.options, _b = _a.requsetMethod, requsetMethod = _b === void 0 ? 'get' : _b, _c = _a.endpoint, endpoint = _c === void 0 ? '' : _c;
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_1__["WPContext"]), url = _d.url, headers = _d.headers;
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), data = _e[0], setData = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _f[0], setLoading = _f[1];
    var _g = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), error = _g[0], setError = _g[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        function loadData() {
            return __awaiter(this, void 0, void 0, function () {
                var query, settings, res, response, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            setLoading(true);
                            query = [url + "/wp-json/wp/v2/" + endpoint];
                            settings = {
                                method: requsetMethod,
                                headers: headers
                            };
                            switch (requsetMethod) {
                                case 'get': {
                                    if (typeof options === 'number') {
                                        query.push("/" + options);
                                    }
                                    else if (Array.isArray(options)) {
                                        query.push("?include=" + options.join(','));
                                    }
                                    else {
                                        query.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["serializeOptions"])(options));
                                    }
                                    break;
                                }
                                case 'post':
                                case 'update': {
                                    Object.assign(settings, {
                                        body: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["passToBody"])(options)
                                    });
                                    break;
                                }
                                case 'delete': {
                                    query.push("/" + id);
                                    Object.assign(settings, {
                                        body: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["passToBody"])(options)
                                    });
                                    break;
                                }
                            }
                            return [4 /*yield*/, fetch(query.join(''), settings)];
                        case 1:
                            res = _a.sent();
                            return [4 /*yield*/, res.json()];
                        case 2:
                            response = _a.sent();
                            setLoading(false);
                            if (response.code) {
                                setError(response);
                            }
                            else {
                                setData(response);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            setLoading(false);
                            setError(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headers, endpoint, requsetMethod, url]);
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useBlockRenderer.ts":
/*!***************************************!*\
  !*** ./src/hooks/useBlockRenderer.ts ***!
  \***************************************/
/*! exports provided: useRetrieveBlockRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlockRenderer", function() { return useRetrieveBlockRenderer; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'block-renderer';
var useRetrieveBlockRenderer = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useBlockRevisions.ts":
/*!****************************************!*\
  !*** ./src/hooks/useBlockRevisions.ts ***!
  \****************************************/
/*! exports provided: useRetrieveBlockRevisions, useCreateBlockRevision, useRetrieveBlockRevision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlockRevisions", function() { return useRetrieveBlockRevisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateBlockRevision", function() { return useCreateBlockRevision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlockRevision", function() { return useRetrieveBlockRevision; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoints = 'blocks';
var useRetrieveBlockRevisions = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoints[0] + "/" + id + "/autosaves"
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreateBlockRevision = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoints[0] + "/" + id + "/autosaves",
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveBlockRevision = function (parent, id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoints[0] + "/" + parent + "/autosaves/" + id
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useBlocks.ts":
/*!********************************!*\
  !*** ./src/hooks/useBlocks.ts ***!
  \********************************/
/*! exports provided: useBlocks, useCreateBlock, useRetrieveBlock, useUpdateBlock, useDeleteBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBlocks", function() { return useBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateBlock", function() { return useCreateBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlock", function() { return useRetrieveBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateBlock", function() { return useUpdateBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteBlock", function() { return useDeleteBlock; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'blocks';
var useBlocks = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreateBlock = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveBlock = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateBlock = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeleteBlock = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useCategories.ts":
/*!************************************!*\
  !*** ./src/hooks/useCategories.ts ***!
  \************************************/
/*! exports provided: useCategories, useCreateCategory, useRetrieveCategory, useUpdateCategory, useDeleteCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCategories", function() { return useCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateCategory", function() { return useCreateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveCategory", function() { return useRetrieveCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateCategory", function() { return useUpdateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteCategory", function() { return useDeleteCategory; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'categories';
var useCategories = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreateCategory = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveCategory = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateCategory = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeleteCategory = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useComments.ts":
/*!**********************************!*\
  !*** ./src/hooks/useComments.ts ***!
  \**********************************/
/*! exports provided: useComments, useCreateComment, useRetrieveComment, useUpdateComment, useDeleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComments", function() { return useComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateComment", function() { return useCreateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveComment", function() { return useRetrieveComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateComment", function() { return useUpdateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteComment", function() { return useDeleteComment; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'comments';
var useComments = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreateComment = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveComment = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateComment = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeleteComment = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useMedia.ts":
/*!*******************************!*\
  !*** ./src/hooks/useMedia.ts ***!
  \*******************************/
/*! exports provided: useMedia, useCreateMedia, useRetrieveMedia, useUpdateMedia, useDeleteMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return useMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateMedia", function() { return useCreateMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveMedia", function() { return useRetrieveMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateMedia", function() { return useUpdateMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteMedia", function() { return useDeleteMedia; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'media';
var useMedia = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreateMedia = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveMedia = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateMedia = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeleteMedia = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/usePageRevisions.ts":
/*!***************************************!*\
  !*** ./src/hooks/usePageRevisions.ts ***!
  \***************************************/
/*! exports provided: usePageRevisions, useCreatePageRevision, useRetrievePageRevision, useDeletePageRevision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageRevisions", function() { return usePageRevisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePageRevision", function() { return useCreatePageRevision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrievePageRevision", function() { return useRetrievePageRevision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePageRevision", function() { return useDeletePageRevision; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'pages';
var usePageRevisions = function (parent, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint + "/" + parent + "/revisions"
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreatePageRevision = function (parent, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint + "/" + parent + "/autosaves",
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrievePageRevision = function (parent, type, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint + "/" + parent + "/" + type
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeletePageRevision = function (parent, id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint + "/" + parent + "/revisions",
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/usePages.ts":
/*!*******************************!*\
  !*** ./src/hooks/usePages.ts ***!
  \*******************************/
/*! exports provided: usePages, useCreatePage, useRetrievePage, useUpdatePage, useDeletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePages", function() { return usePages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePage", function() { return useCreatePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrievePage", function() { return useRetrievePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdatePage", function() { return useUpdatePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePage", function() { return useDeletePage; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'pages';
var usePages = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreatePage = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrievePage = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdatePage = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeletePage = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/usePostRevisions.ts":
/*!***************************************!*\
  !*** ./src/hooks/usePostRevisions.ts ***!
  \***************************************/
/*! exports provided: usePostRevisions, useCreatePostRevision, useRetrievePostRevision, useDeletePostRevision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePostRevisions", function() { return usePostRevisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePostRevision", function() { return useCreatePostRevision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrievePostRevision", function() { return useRetrievePostRevision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePostRevision", function() { return useDeletePostRevision; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'posts';
var usePostRevisions = function (parent, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint + "/" + parent + "/revisions"
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreatePostRevision = function (parent, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint + "/" + parent + "/autosaves",
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrievePostRevision = function (parent, type, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint + "/" + parent + "/" + type
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeletePostRevision = function (parent, id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint + "/" + parent + "/revisions",
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/usePosts.ts":
/*!*******************************!*\
  !*** ./src/hooks/usePosts.ts ***!
  \*******************************/
/*! exports provided: usePosts, useCreatePost, useRetrievePost, useUpdatePost, useDeletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePosts", function() { return usePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePost", function() { return useCreatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrievePost", function() { return useRetrievePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdatePost", function() { return useUpdatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePost", function() { return useDeletePost; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'posts';
var usePosts = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreatePost = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrievePost = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdatePost = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeletePost = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useSearch.ts":
/*!********************************!*\
  !*** ./src/hooks/useSearch.ts ***!
  \********************************/
/*! exports provided: useSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return useSearch; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'search';
var useSearch = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useSettings.ts":
/*!**********************************!*\
  !*** ./src/hooks/useSettings.ts ***!
  \**********************************/
/*! exports provided: useSettings, useUpdateSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return useSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateSetting", function() { return useUpdateSetting; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'settings';
var useSettings = function () {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateSetting = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useStatuses.ts":
/*!**********************************!*\
  !*** ./src/hooks/useStatuses.ts ***!
  \**********************************/
/*! exports provided: useRetrieveStatuses, useRetrieveStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveStatuses", function() { return useRetrieveStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveStatus", function() { return useRetrieveStatus; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'statuses';
var useRetrieveStatuses = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveStatus = function (status, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: status,
        options: options,
        endpoint: endpoint
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useTags.ts":
/*!******************************!*\
  !*** ./src/hooks/useTags.ts ***!
  \******************************/
/*! exports provided: useTags, useCreateTag, useRetrieveTag, useUpdateTag, useDeleteTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTags", function() { return useTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateTag", function() { return useCreateTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTag", function() { return useRetrieveTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateTag", function() { return useUpdateTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteTag", function() { return useDeleteTag; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'tags';
var useTags = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreateTag = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveTag = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateTag = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeleteTag = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useTaxonomies.ts":
/*!************************************!*\
  !*** ./src/hooks/useTaxonomies.ts ***!
  \************************************/
/*! exports provided: useRetrieveTaxonomies, useRetrieveTaxonomy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTaxonomies", function() { return useRetrieveTaxonomies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTaxonomy", function() { return useRetrieveTaxonomy; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'taxonomies';
var useRetrieveTaxonomies = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveTaxonomy = function (taxonomy, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: taxonomy,
        options: options,
        endpoint: endpoint
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useThemes.ts":
/*!********************************!*\
  !*** ./src/hooks/useThemes.ts ***!
  \********************************/
/*! exports provided: useThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemes", function() { return useThemes; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'themes';
var useThemes = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useTypes.ts":
/*!*******************************!*\
  !*** ./src/hooks/useTypes.ts ***!
  \*******************************/
/*! exports provided: useRetrieveTypes, useRetrieveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTypes", function() { return useRetrieveTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveType", function() { return useRetrieveType; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'types';
var useRetrieveTypes = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveType = function (type, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: type,
        options: options,
        endpoint: endpoint
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useUsers.ts":
/*!*******************************!*\
  !*** ./src/hooks/useUsers.ts ***!
  \*******************************/
/*! exports provided: useUsers, useCreateUser, useRetrieveUser, useUpdateUser, useDeleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return useUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateUser", function() { return useCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrieveUser", function() { return useRetrieveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateUser", function() { return useUpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteUser", function() { return useDeleteUser; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.ts");

var endpoint = 'users';
var useUsers = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useCreateUser = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetrieveUser = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ id: id, options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateUser = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'post'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeleteUser = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: usePosts, useCreatePost, useRetrievePost, useUpdatePost, useDeletePost, usePostRevisions, useCreatePostRevision, useRetrievePostRevision, useDeletePostRevision, useBlocks, useCreateBlock, useRetrieveBlock, useUpdateBlock, useDeleteBlock, useRetrieveBlockRevisions, useCreateBlockRevision, useRetrieveBlockRevision, useRetrieveBlockRenderer, useCategories, useCreateCategory, useRetrieveCategory, useUpdateCategory, useDeleteCategory, useTags, useCreateTag, useRetrieveTag, useUpdateTag, useDeleteTag, usePages, useCreatePage, useRetrievePage, useUpdatePage, useDeletePage, usePageRevisions, useCreatePageRevision, useRetrievePageRevision, useDeletePageRevision, useComments, useCreateComment, useRetrieveComment, useUpdateComment, useDeleteComment, useRetrieveTaxonomies, useRetrieveTaxonomy, useMedia, useCreateMedia, useRetrieveMedia, useUpdateMedia, useDeleteMedia, useUsers, useCreateUser, useRetrieveUser, useUpdateUser, useDeleteUser, useRetrieveTypes, useRetrieveType, useRetrieveStatuses, useRetrieveStatus, useSettings, useUpdateSetting, useThemes, useSearch, WPContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/usePosts */ "./src/hooks/usePosts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePosts", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["usePosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreatePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useCreatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrievePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useRetrievePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdatePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useUpdatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeletePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useDeletePost"]; });

/* harmony import */ var _hooks_usePostRevisions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/usePostRevisions */ "./src/hooks/usePostRevisions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePostRevisions", function() { return _hooks_usePostRevisions__WEBPACK_IMPORTED_MODULE_1__["usePostRevisions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreatePostRevision", function() { return _hooks_usePostRevisions__WEBPACK_IMPORTED_MODULE_1__["useCreatePostRevision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrievePostRevision", function() { return _hooks_usePostRevisions__WEBPACK_IMPORTED_MODULE_1__["useRetrievePostRevision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeletePostRevision", function() { return _hooks_usePostRevisions__WEBPACK_IMPORTED_MODULE_1__["useDeletePostRevision"]; });

/* harmony import */ var _hooks_useBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useBlocks */ "./src/hooks/useBlocks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBlocks", function() { return _hooks_useBlocks__WEBPACK_IMPORTED_MODULE_2__["useBlocks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateBlock", function() { return _hooks_useBlocks__WEBPACK_IMPORTED_MODULE_2__["useCreateBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlock", function() { return _hooks_useBlocks__WEBPACK_IMPORTED_MODULE_2__["useRetrieveBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateBlock", function() { return _hooks_useBlocks__WEBPACK_IMPORTED_MODULE_2__["useUpdateBlock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteBlock", function() { return _hooks_useBlocks__WEBPACK_IMPORTED_MODULE_2__["useDeleteBlock"]; });

/* harmony import */ var _hooks_useBlockRevisions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useBlockRevisions */ "./src/hooks/useBlockRevisions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlockRevisions", function() { return _hooks_useBlockRevisions__WEBPACK_IMPORTED_MODULE_3__["useRetrieveBlockRevisions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateBlockRevision", function() { return _hooks_useBlockRevisions__WEBPACK_IMPORTED_MODULE_3__["useCreateBlockRevision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlockRevision", function() { return _hooks_useBlockRevisions__WEBPACK_IMPORTED_MODULE_3__["useRetrieveBlockRevision"]; });

/* harmony import */ var _hooks_useBlockRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useBlockRenderer */ "./src/hooks/useBlockRenderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveBlockRenderer", function() { return _hooks_useBlockRenderer__WEBPACK_IMPORTED_MODULE_4__["useRetrieveBlockRenderer"]; });

/* harmony import */ var _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useCategories */ "./src/hooks/useCategories.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCategories", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__["useCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__["useCreateCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__["useRetrieveCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__["useUpdateCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_5__["useDeleteCategory"]; });

/* harmony import */ var _hooks_useTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useTags */ "./src/hooks/useTags.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTags", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_6__["useTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_6__["useCreateTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_6__["useRetrieveTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_6__["useUpdateTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_6__["useDeleteTag"]; });

/* harmony import */ var _hooks_usePages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/usePages */ "./src/hooks/usePages.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePages", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_7__["usePages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreatePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_7__["useCreatePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrievePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_7__["useRetrievePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdatePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_7__["useUpdatePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeletePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_7__["useDeletePage"]; });

/* harmony import */ var _hooks_usePageRevisions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/usePageRevisions */ "./src/hooks/usePageRevisions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageRevisions", function() { return _hooks_usePageRevisions__WEBPACK_IMPORTED_MODULE_8__["usePageRevisions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreatePageRevision", function() { return _hooks_usePageRevisions__WEBPACK_IMPORTED_MODULE_8__["useCreatePageRevision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrievePageRevision", function() { return _hooks_usePageRevisions__WEBPACK_IMPORTED_MODULE_8__["useRetrievePageRevision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeletePageRevision", function() { return _hooks_usePageRevisions__WEBPACK_IMPORTED_MODULE_8__["useDeletePageRevision"]; });

/* harmony import */ var _hooks_useComments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useComments */ "./src/hooks/useComments.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useComments", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_9__["useComments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_9__["useCreateComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_9__["useRetrieveComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_9__["useUpdateComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_9__["useDeleteComment"]; });

/* harmony import */ var _hooks_useTaxonomies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useTaxonomies */ "./src/hooks/useTaxonomies.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTaxonomies", function() { return _hooks_useTaxonomies__WEBPACK_IMPORTED_MODULE_10__["useRetrieveTaxonomies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTaxonomy", function() { return _hooks_useTaxonomies__WEBPACK_IMPORTED_MODULE_10__["useRetrieveTaxonomy"]; });

/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useMedia */ "./src/hooks/useMedia.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__["useMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__["useCreateMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__["useRetrieveMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__["useUpdateMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_11__["useDeleteMedia"]; });

/* harmony import */ var _hooks_useUsers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useUsers */ "./src/hooks/useUsers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_12__["useUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_12__["useCreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_12__["useRetrieveUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_12__["useUpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_12__["useDeleteUser"]; });

/* harmony import */ var _hooks_useTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hooks/useTypes */ "./src/hooks/useTypes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveTypes", function() { return _hooks_useTypes__WEBPACK_IMPORTED_MODULE_13__["useRetrieveTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveType", function() { return _hooks_useTypes__WEBPACK_IMPORTED_MODULE_13__["useRetrieveType"]; });

/* harmony import */ var _hooks_useStatuses__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks/useStatuses */ "./src/hooks/useStatuses.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveStatuses", function() { return _hooks_useStatuses__WEBPACK_IMPORTED_MODULE_14__["useRetrieveStatuses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrieveStatus", function() { return _hooks_useStatuses__WEBPACK_IMPORTED_MODULE_14__["useRetrieveStatus"]; });

/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hooks/useSettings */ "./src/hooks/useSettings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return _hooks_useSettings__WEBPACK_IMPORTED_MODULE_15__["useSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateSetting", function() { return _hooks_useSettings__WEBPACK_IMPORTED_MODULE_15__["useUpdateSetting"]; });

/* harmony import */ var _hooks_useThemes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hooks/useThemes */ "./src/hooks/useThemes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThemes", function() { return _hooks_useThemes__WEBPACK_IMPORTED_MODULE_16__["useThemes"]; });

/* harmony import */ var _hooks_useSearch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hooks/useSearch */ "./src/hooks/useSearch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return _hooks_useSearch__WEBPACK_IMPORTED_MODULE_17__["useSearch"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./context */ "./src/context.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WPContext", function() { return _context__WEBPACK_IMPORTED_MODULE_18__["WPContext"]; });






















/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: serializeOptions, passToBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _serializeOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializeOptions */ "./src/utils/serializeOptions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeOptions", function() { return _serializeOptions__WEBPACK_IMPORTED_MODULE_0__["serializeOptions"]; });

/* harmony import */ var _passToBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passToBody */ "./src/utils/passToBody.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passToBody", function() { return _passToBody__WEBPACK_IMPORTED_MODULE_1__["passToBody"]; });





/***/ }),

/***/ "./src/utils/passToBody.ts":
/*!*********************************!*\
  !*** ./src/utils/passToBody.ts ***!
  \*********************************/
/*! exports provided: passToBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passToBody", function() { return passToBody; });
var passToBody = function (options) {
    if (!options) {
        return options;
    }
    var params = Object.entries(options);
    var urlencoded = new URLSearchParams();
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var _a = params_1[_i], key = _a[0], value = _a[1];
        urlencoded.append(key, value);
    }
    return urlencoded;
};


/***/ }),

/***/ "./src/utils/serializeOptions.ts":
/*!***************************************!*\
  !*** ./src/utils/serializeOptions.ts ***!
  \***************************************/
/*! exports provided: serializeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeOptions", function() { return serializeOptions; });
var serializeOptions = function (options) {
    var string = [];
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            string.push(encodeURIComponent(key) + "=" + encodeURIComponent(options[key]));
        }
    }
    return string.length > 0 ? '?' + string.join('&') : '';
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=react-wordpress-hooks.js.map