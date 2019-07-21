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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
exports.WPContext = react_1.default.createContext({
    url: '',
    headers: undefined
});


/***/ }),

/***/ "./src/hooks/useApiRequest.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useApiRequest.tsx ***!
  \*************************************/
/*! no static exports found */
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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
const context_1 = __webpack_require__(/*! ../context */ "./src/context.tsx");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.tsx");
exports.useApiRequest = ({ id, options, requsetMethod = 'get', endpoint = '' }) => {
    const { url, headers } = react_1.useContext(context_1.WPContext);
    const [data, setData] = react_1.useState([]);
    const [loading, setLoading] = react_1.useState(false);
    const [error, setError] = react_1.useState(null);
    react_1.useEffect(() => {
        const loadData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                setLoading(true);
                const query = [`${url}/wp-json/wp/v2/${endpoint}`];
                if (requsetMethod === 'delete') {
                    query.push(`/${id}`);
                }
                if (requsetMethod === 'get') {
                    if (typeof options === 'number') {
                        query.push(`/${options}`);
                    }
                    else if (Array.isArray(options)) {
                        query.push(`?include=${options.join(',')}`);
                    }
                    else {
                        query.push(utils_1.serialize(options));
                    }
                }
                const res = yield fetch(query.join(''), {
                    method: requsetMethod,
                    headers
                });
                const response = yield res.json();
                setLoading(false);
                if (response.code) {
                    setError(response);
                }
                else {
                    setData(response);
                }
            }
            catch (err) {
                setLoading(false);
                setError(err);
            }
        });
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headers, endpoint, requsetMethod, url]);
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useCategories.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useCategories.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'categories';
exports.useCategories = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint
    });
    return { data, loading, error };
};
exports.useCreateCategory = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useRetriveCategory = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint
    });
    return { data, loading, error };
};
exports.useUpdateCategory = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useDeleteCategory = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useComments.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useComments.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'comments';
exports.useComments = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useCreateComment = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useRetriveComment = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useUpdateComment = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useDeleteComment = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useMedia.tsx":
/*!********************************!*\
  !*** ./src/hooks/useMedia.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'media';
exports.useMedia = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useCreateMedia = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useRetriveMedia = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useUpdateMedia = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useDeleteMedia = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/usePages.tsx":
/*!********************************!*\
  !*** ./src/hooks/usePages.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'pages';
exports.usePages = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useCreatePage = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useRetrivePage = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useUpdatePage = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useDeletePage = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/usePosts.tsx":
/*!********************************!*\
  !*** ./src/hooks/usePosts.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'posts';
exports.usePosts = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useCreatePost = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useRetrivePost = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useUpdatePost = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useDeletePost = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useRevisions.tsx":
/*!************************************!*\
  !*** ./src/hooks/useRevisions.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'revisions';
exports.useRevisions = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};
exports.useRetriveRevision = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useDeleteRevision = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useSettings.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useSettings.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'settings';
exports.useSettings = () => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ endpoint });
    return { data, loading, error };
};
exports.useUpdateSetting = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useStatuses.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useStatuses.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'statuses';
exports.useStatuses = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useRetriveStatus = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useTags.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useTags.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'tags';
exports.useTags = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useCreateTag = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useRetriveTag = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useUpdateTag = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useDeleteTag = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useTaxonomies.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useTaxonomies.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'taxonomies';
exports.useTaxonomies = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useRetriveTaxonomy = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useTypes.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTypes.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'types';
exports.useTypes = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useRetriveType = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/hooks/useUsers.tsx":
/*!********************************!*\
  !*** ./src/hooks/useUsers.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const useApiRequest_1 = __webpack_require__(/*! ./useApiRequest */ "./src/hooks/useApiRequest.tsx");
const endpoint = 'users';
exports.useUsers = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useCreateUser = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useRetriveUser = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({ options, endpoint });
    return { data, loading, error };
};
exports.useUpdateUser = (options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        options,
        endpoint,
        requsetMethod: 'post'
    });
    return { data, loading, error };
};
exports.useDeleteUser = (id, options) => {
    const { data, loading, error } = useApiRequest_1.useApiRequest({
        id,
        options,
        endpoint,
        requsetMethod: 'delete'
    });
    return { data, loading, error };
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var usePosts_1 = __webpack_require__(/*! ./hooks/usePosts */ "./src/hooks/usePosts.tsx");
exports.usePosts = usePosts_1.usePosts;
exports.useCreatePost = usePosts_1.useCreatePost;
exports.useRetrivePost = usePosts_1.useRetrivePost;
exports.useUpdatePost = usePosts_1.useUpdatePost;
exports.useDeletePost = usePosts_1.useDeletePost;
var useRevisions_1 = __webpack_require__(/*! ./hooks/useRevisions */ "./src/hooks/useRevisions.tsx");
exports.useRevisions = useRevisions_1.useRevisions;
exports.useRetriveRevision = useRevisions_1.useRetriveRevision;
exports.useDeleteRevision = useRevisions_1.useDeleteRevision;
var useCategories_1 = __webpack_require__(/*! ./hooks/useCategories */ "./src/hooks/useCategories.tsx");
exports.useCategories = useCategories_1.useCategories;
exports.useCreateCategory = useCategories_1.useCreateCategory;
exports.useRetriveCategory = useCategories_1.useRetriveCategory;
exports.useUpdateCategory = useCategories_1.useUpdateCategory;
exports.useDeleteCategory = useCategories_1.useDeleteCategory;
var useTags_1 = __webpack_require__(/*! ./hooks/useTags */ "./src/hooks/useTags.tsx");
exports.useTags = useTags_1.useTags;
exports.useCreateTag = useTags_1.useCreateTag;
exports.useRetriveTag = useTags_1.useRetriveTag;
exports.useUpdateTag = useTags_1.useUpdateTag;
exports.useDeleteTag = useTags_1.useDeleteTag;
var usePages_1 = __webpack_require__(/*! ./hooks/usePages */ "./src/hooks/usePages.tsx");
exports.usePages = usePages_1.usePages;
exports.useCreatePage = usePages_1.useCreatePage;
exports.useRetrivePage = usePages_1.useRetrivePage;
exports.useUpdatePage = usePages_1.useUpdatePage;
exports.useDeletePage = usePages_1.useDeletePage;
var useComments_1 = __webpack_require__(/*! ./hooks/useComments */ "./src/hooks/useComments.tsx");
exports.useComments = useComments_1.useComments;
exports.useCreateComment = useComments_1.useCreateComment;
exports.useRetriveComment = useComments_1.useRetriveComment;
exports.useUpdateComment = useComments_1.useUpdateComment;
exports.useDeleteComment = useComments_1.useDeleteComment;
var useTaxonomies_1 = __webpack_require__(/*! ./hooks/useTaxonomies */ "./src/hooks/useTaxonomies.tsx");
exports.useTaxonomies = useTaxonomies_1.useTaxonomies;
exports.useRetriveTaxonomy = useTaxonomies_1.useRetriveTaxonomy;
var useMedia_1 = __webpack_require__(/*! ./hooks/useMedia */ "./src/hooks/useMedia.tsx");
exports.useMedia = useMedia_1.useMedia;
exports.useCreateMedia = useMedia_1.useCreateMedia;
exports.useRetriveMedia = useMedia_1.useRetriveMedia;
exports.useUpdateMedia = useMedia_1.useUpdateMedia;
exports.useDeleteMedia = useMedia_1.useDeleteMedia;
var useUsers_1 = __webpack_require__(/*! ./hooks/useUsers */ "./src/hooks/useUsers.tsx");
exports.useUsers = useUsers_1.useUsers;
exports.useCreateUser = useUsers_1.useCreateUser;
exports.useRetriveUser = useUsers_1.useRetriveUser;
exports.useUpdateUser = useUsers_1.useUpdateUser;
exports.useDeleteUser = useUsers_1.useDeleteUser;
var useTypes_1 = __webpack_require__(/*! ./hooks/useTypes */ "./src/hooks/useTypes.tsx");
exports.useTypes = useTypes_1.useTypes;
exports.useRetriveType = useTypes_1.useRetriveType;
var useStatuses_1 = __webpack_require__(/*! ./hooks/useStatuses */ "./src/hooks/useStatuses.tsx");
exports.useStatuses = useStatuses_1.useStatuses;
exports.useRetriveStatus = useStatuses_1.useRetriveStatus;
var useSettings_1 = __webpack_require__(/*! ./hooks/useSettings */ "./src/hooks/useSettings.tsx");
exports.useSettings = useSettings_1.useSettings;
exports.useUpdateSetting = useSettings_1.useUpdateSetting;
var context_1 = __webpack_require__(/*! ./context */ "./src/context.tsx");
exports.WPContext = context_1.WPContext;


/***/ }),

/***/ "./src/utils/index.tsx":
/*!*****************************!*\
  !*** ./src/utils/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = (object) => {
    const string = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            string.push(`${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`);
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