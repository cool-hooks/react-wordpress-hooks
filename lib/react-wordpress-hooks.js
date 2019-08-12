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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/context.tsx":
/*!*************************!*\
  !*** ./src/context.tsx ***!
  \*************************/
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

/***/ "./src/hooks/useApiRequest.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useApiRequest.tsx ***!
  \*************************************/
/*! exports provided: useApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApiRequest", function() { return useApiRequest; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./src/context.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
                var query, res, response, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            setLoading(true);
                            query = [url + "/wp-json/wp/v2/" + endpoint];
                            if (requsetMethod === 'delete') {
                                query.push("/" + id);
                            }
                            if (requsetMethod === 'get') {
                                if (typeof options === 'number') {
                                    query.push("/" + options);
                                }
                                else if (Array.isArray(options)) {
                                    query.push("?include=" + options.join(','));
                                }
                                else {
                                    query.push(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["serialize"])(options));
                                }
                            }
                            return [4 /*yield*/, fetch(query.join(''), {
                                    method: requsetMethod,
                                    headers: headers
                                })];
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

/***/ "./src/hooks/useCategories.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useCategories.tsx ***!
  \*************************************/
/*! exports provided: useCategories, useCreateCategory, useRetriveCategory, useUpdateCategory, useDeleteCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCategories", function() { return useCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateCategory", function() { return useCreateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveCategory", function() { return useRetriveCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateCategory", function() { return useUpdateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteCategory", function() { return useDeleteCategory; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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
var useRetriveCategory = function (options) {
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

/***/ "./src/hooks/useComments.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useComments.tsx ***!
  \***********************************/
/*! exports provided: useComments, useCreateComment, useRetriveComment, useUpdateComment, useDeleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComments", function() { return useComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateComment", function() { return useCreateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveComment", function() { return useRetriveComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateComment", function() { return useUpdateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteComment", function() { return useDeleteComment; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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
var useRetriveComment = function (options) {
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

/***/ "./src/hooks/useMedia.tsx":
/*!********************************!*\
  !*** ./src/hooks/useMedia.tsx ***!
  \********************************/
/*! exports provided: useMedia, useCreateMedia, useRetriveMedia, useUpdateMedia, useDeleteMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return useMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateMedia", function() { return useCreateMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveMedia", function() { return useRetriveMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateMedia", function() { return useUpdateMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteMedia", function() { return useDeleteMedia; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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
var useRetriveMedia = function (options) {
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

/***/ "./src/hooks/usePages.tsx":
/*!********************************!*\
  !*** ./src/hooks/usePages.tsx ***!
  \********************************/
/*! exports provided: usePages, useCreatePage, useRetrivePage, useUpdatePage, useDeletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePages", function() { return usePages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePage", function() { return useCreatePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrivePage", function() { return useRetrivePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdatePage", function() { return useUpdatePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePage", function() { return useDeletePage; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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
var useRetrivePage = function (options) {
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

/***/ "./src/hooks/usePosts.tsx":
/*!********************************!*\
  !*** ./src/hooks/usePosts.tsx ***!
  \********************************/
/*! exports provided: usePosts, useCreatePost, useRetrivePost, useUpdatePost, useDeletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePosts", function() { return usePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePost", function() { return useCreatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetrivePost", function() { return useRetrivePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdatePost", function() { return useUpdatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeletePost", function() { return useDeletePost; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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
var useRetrivePost = function (options) {
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

/***/ "./src/hooks/useRevisions.tsx":
/*!************************************!*\
  !*** ./src/hooks/useRevisions.tsx ***!
  \************************************/
/*! exports provided: useRevisions, useRetriveRevision, useDeleteRevision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRevisions", function() { return useRevisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveRevision", function() { return useRetriveRevision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteRevision", function() { return useDeleteRevision; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

var endpoint = 'revisions';
var useRevisions = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetriveRevision = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useDeleteRevision = function (id, options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
        id: id,
        options: options,
        endpoint: endpoint,
        requsetMethod: 'delete'
    }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useSettings.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useSettings.tsx ***!
  \***********************************/
/*! exports provided: useSettings, useUpdateSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return useSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateSetting", function() { return useUpdateSetting; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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

/***/ "./src/hooks/useStatuses.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useStatuses.tsx ***!
  \***********************************/
/*! exports provided: useStatuses, useRetriveStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStatuses", function() { return useStatuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveStatus", function() { return useRetriveStatus; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

var endpoint = 'statuses';
var useStatuses = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetriveStatus = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useTags.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useTags.tsx ***!
  \*******************************/
/*! exports provided: useTags, useCreateTag, useRetriveTag, useUpdateTag, useDeleteTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTags", function() { return useTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateTag", function() { return useCreateTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveTag", function() { return useRetriveTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateTag", function() { return useUpdateTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteTag", function() { return useDeleteTag; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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
var useRetriveTag = function (options) {
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

/***/ "./src/hooks/useTaxonomies.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useTaxonomies.tsx ***!
  \*************************************/
/*! exports provided: useTaxonomies, useRetriveTaxonomy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTaxonomies", function() { return useTaxonomies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveTaxonomy", function() { return useRetriveTaxonomy; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

var endpoint = 'taxonomies';
var useTaxonomies = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetriveTaxonomy = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useTypes.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTypes.tsx ***!
  \********************************/
/*! exports provided: useTypes, useRetriveType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTypes", function() { return useTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveType", function() { return useRetriveType; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

var endpoint = 'types';
var useTypes = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useRetriveType = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};


/***/ }),

/***/ "./src/hooks/useUsers.tsx":
/*!********************************!*\
  !*** ./src/hooks/useUsers.tsx ***!
  \********************************/
/*! exports provided: useUsers, useCreateUser, useRetriveUser, useUpdateUser, useDeleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return useUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateUser", function() { return useCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRetriveUser", function() { return useRetriveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateUser", function() { return useUpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteUser", function() { return useDeleteUser; });
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");

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
var useRetriveUser = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({ options: options, endpoint: endpoint }), data = _a.data, loading = _a.loading, error = _a.error;
    return { data: data, loading: loading, error: error };
};
var useUpdateUser = function (options) {
    var _a = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["useApiRequest"])({
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

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: WPContext, usePosts, useCreatePost, useRetrivePost, useUpdatePost, useDeletePost, useRevisions, useRetriveRevision, useDeleteRevision, useCategories, useCreateCategory, useRetriveCategory, useUpdateCategory, useDeleteCategory, useTags, useCreateTag, useRetriveTag, useUpdateTag, useDeleteTag, usePages, useCreatePage, useRetrivePage, useUpdatePage, useDeletePage, useComments, useCreateComment, useRetriveComment, useUpdateComment, useDeleteComment, useTaxonomies, useRetriveTaxonomy, useMedia, useCreateMedia, useRetriveMedia, useUpdateMedia, useDeleteMedia, useUsers, useCreateUser, useRetriveUser, useUpdateUser, useDeleteUser, useTypes, useRetriveType, useStatuses, useRetriveStatus, useSettings, useUpdateSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks/usePosts */ "./src/hooks/usePosts.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePosts", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["usePosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreatePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useCreatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrivePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useRetrivePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdatePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useUpdatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeletePost", function() { return _hooks_usePosts__WEBPACK_IMPORTED_MODULE_0__["useDeletePost"]; });

/* harmony import */ var _hooks_useRevisions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useRevisions */ "./src/hooks/useRevisions.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRevisions", function() { return _hooks_useRevisions__WEBPACK_IMPORTED_MODULE_1__["useRevisions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveRevision", function() { return _hooks_useRevisions__WEBPACK_IMPORTED_MODULE_1__["useRetriveRevision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteRevision", function() { return _hooks_useRevisions__WEBPACK_IMPORTED_MODULE_1__["useDeleteRevision"]; });

/* harmony import */ var _hooks_useCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useCategories */ "./src/hooks/useCategories.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCategories", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_2__["useCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_2__["useCreateCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_2__["useRetriveCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_2__["useUpdateCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteCategory", function() { return _hooks_useCategories__WEBPACK_IMPORTED_MODULE_2__["useDeleteCategory"]; });

/* harmony import */ var _hooks_useTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useTags */ "./src/hooks/useTags.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTags", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_3__["useTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_3__["useCreateTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_3__["useRetriveTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_3__["useUpdateTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteTag", function() { return _hooks_useTags__WEBPACK_IMPORTED_MODULE_3__["useDeleteTag"]; });

/* harmony import */ var _hooks_usePages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/usePages */ "./src/hooks/usePages.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePages", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_4__["usePages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreatePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_4__["useCreatePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetrivePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_4__["useRetrivePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdatePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_4__["useUpdatePage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeletePage", function() { return _hooks_usePages__WEBPACK_IMPORTED_MODULE_4__["useDeletePage"]; });

/* harmony import */ var _hooks_useComments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useComments */ "./src/hooks/useComments.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useComments", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_5__["useComments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_5__["useCreateComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_5__["useRetriveComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_5__["useUpdateComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteComment", function() { return _hooks_useComments__WEBPACK_IMPORTED_MODULE_5__["useDeleteComment"]; });

/* harmony import */ var _hooks_useTaxonomies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useTaxonomies */ "./src/hooks/useTaxonomies.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTaxonomies", function() { return _hooks_useTaxonomies__WEBPACK_IMPORTED_MODULE_6__["useTaxonomies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveTaxonomy", function() { return _hooks_useTaxonomies__WEBPACK_IMPORTED_MODULE_6__["useRetriveTaxonomy"]; });

/* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useMedia */ "./src/hooks/useMedia.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__["useMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__["useCreateMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__["useRetriveMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__["useUpdateMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteMedia", function() { return _hooks_useMedia__WEBPACK_IMPORTED_MODULE_7__["useDeleteMedia"]; });

/* harmony import */ var _hooks_useUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useUsers */ "./src/hooks/useUsers.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUsers", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_8__["useUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCreateUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_8__["useCreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_8__["useRetriveUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_8__["useUpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeleteUser", function() { return _hooks_useUsers__WEBPACK_IMPORTED_MODULE_8__["useDeleteUser"]; });

/* harmony import */ var _hooks_useTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useTypes */ "./src/hooks/useTypes.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTypes", function() { return _hooks_useTypes__WEBPACK_IMPORTED_MODULE_9__["useTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveType", function() { return _hooks_useTypes__WEBPACK_IMPORTED_MODULE_9__["useRetriveType"]; });

/* harmony import */ var _hooks_useStatuses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useStatuses */ "./src/hooks/useStatuses.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStatuses", function() { return _hooks_useStatuses__WEBPACK_IMPORTED_MODULE_10__["useStatuses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRetriveStatus", function() { return _hooks_useStatuses__WEBPACK_IMPORTED_MODULE_10__["useRetriveStatus"]; });

/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSettings", function() { return _hooks_useSettings__WEBPACK_IMPORTED_MODULE_11__["useSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdateSetting", function() { return _hooks_useSettings__WEBPACK_IMPORTED_MODULE_11__["useUpdateSetting"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./context */ "./src/context.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WPContext", function() { return _context__WEBPACK_IMPORTED_MODULE_12__["WPContext"]; });
















/***/ }),

/***/ "./src/utils/index.tsx":
/*!*****************************!*\
  !*** ./src/utils/index.tsx ***!
  \*****************************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
var serialize = function (object) {
    var string = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            string.push(encodeURIComponent(key) + "=" + encodeURIComponent(object[key]));
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