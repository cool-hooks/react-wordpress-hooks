"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __awaiter(e,t,o,r){return new(o||(o=Promise))((function(n,s){function a(e){try{u(r.next(e))}catch(e){s(e)}}function i(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){e.done?n(e.value):new o((function(t){t(e.value)})).then(a,i)}u((r=r.apply(e,t||[])).next())}))}function __generator(e,t){var o,r,n,s,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){a.label=s[1];break}if(6===s[0]&&a.label<n[1]){a.label=n[1],n=s;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(s);break}n[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{o=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}var WPContext=React__default.createContext({url:"",headers:void 0}),serializeOptions=function(e){var t=[];for(var o in e)e.hasOwnProperty(o)&&t.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return t.length>0?"?"+t.join("&"):""},passToBody=function(e){if(!e)return e;for(var t=Object.entries(e),o=new URLSearchParams,r=0,n=t;r<n.length;r++){var s=n[r],a=s[0],i=s[1];o.append(a,i)}return o},useApiRequest=function(e){var t=e.id,o=e.options,r=e.requsetMethod,n=void 0===r?"get":r,s=e.endpoint,a=void 0===s?"":s,i=React.useContext(WPContext),u=i.url,d=i.headers,p=React.useState([]),l=p[0],g=p[1],v=React.useState(!1),c=v[0],R=v[1],f=React.useState(null),q=f[0],x=f[1];return React.useEffect((function(){!function(){__awaiter(this,void 0,void 0,(function(){var e,r,s,i;return __generator(this,(function(p){switch(p.label){case 0:switch(p.trys.push([0,3,,4]),R(!0),e=[u+"/wp-json/wp/v2/"+a],r={method:n,headers:d},n){case"get":"number"==typeof o?e.push("/"+o):Array.isArray(o)?e.push("?include="+o.join(",")):e.push(serializeOptions(o));break;case"post":case"update":Object.assign(r,{body:passToBody(o)});break;case"delete":e.push("/"+t),Object.assign(r,{body:passToBody(o)})}return[4,fetch(e.join(""),r)];case 1:return[4,p.sent().json()];case 2:return s=p.sent(),R(!1),s.code?x(s):g(s),[3,4];case 3:return i=p.sent(),R(!1),x(i),[3,4];case 4:return[2]}}))}))}()}),[d,a,n,u]),{data:l,loading:c,error:q}},endpoint="posts",usePosts=function(e){var t=useApiRequest({options:e,endpoint:endpoint});return{data:t.data,loading:t.loading,error:t.error}},useCreatePost=function(e){var t=useApiRequest({options:e,endpoint:endpoint,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrievePost=function(e){var t=useApiRequest({options:e,endpoint:endpoint});return{data:t.data,loading:t.loading,error:t.error}},useUpdatePost=function(e){var t=useApiRequest({options:e,endpoint:endpoint,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useDeletePost=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoint$1="posts",usePostRevisions=function(e,t){var o=useApiRequest({options:t,endpoint:endpoint$1+"/"+e+"/revisions"});return{data:o.data,loading:o.loading,error:o.error}},useCreatePostRevision=function(e,t){var o=useApiRequest({options:t,endpoint:endpoint$1+"/"+e+"/autosaves",requsetMethod:"post"});return{data:o.data,loading:o.loading,error:o.error}},useRetrievePostRevision=function(e,t,o){var r=useApiRequest({options:o,endpoint:endpoint$1+"/"+e+"/"+t});return{data:r.data,loading:r.loading,error:r.error}},useDeletePostRevision=function(e,t,o){var r=useApiRequest({id:t,options:o,endpoint:endpoint$1+"/"+e+"/revisions",requsetMethod:"delete"});return{data:r.data,loading:r.loading,error:r.error}},endpoint$2="blocks",useBlocks=function(e){var t=useApiRequest({options:e,endpoint:endpoint$2});return{data:t.data,loading:t.loading,error:t.error}},useCreateBlock=function(e){var t=useApiRequest({options:e,endpoint:endpoint$2,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveBlock=function(e){var t=useApiRequest({options:e,endpoint:endpoint$2});return{data:t.data,loading:t.loading,error:t.error}},useUpdateBlock=function(e){var t=useApiRequest({options:e,endpoint:endpoint$2,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useDeleteBlock=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$2,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoints="blocks",useRetrieveBlockRevisions=function(e,t){var o=useApiRequest({options:t,endpoint:endpoints[0]+"/"+e+"/autosaves"});return{data:o.data,loading:o.loading,error:o.error}},useCreateBlockRevision=function(e,t){var o=useApiRequest({options:t,endpoint:endpoints[0]+"/"+e+"/autosaves",requsetMethod:"post"});return{data:o.data,loading:o.loading,error:o.error}},useRetrieveBlockRevision=function(e,t,o){var r=useApiRequest({options:o,endpoint:endpoints[0]+"/"+e+"/autosaves/"+t});return{data:r.data,loading:r.loading,error:r.error}},endpoint$3="block-renderer",useRetrieveBlockRenderer=function(e){var t=useApiRequest({options:e,endpoint:endpoint$3});return{data:t.data,loading:t.loading,error:t.error}},endpoint$4="categories",useCategories=function(e){var t=useApiRequest({options:e,endpoint:endpoint$4});return{data:t.data,loading:t.loading,error:t.error}},useCreateCategory=function(e){var t=useApiRequest({options:e,endpoint:endpoint$4,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveCategory=function(e){var t=useApiRequest({options:e,endpoint:endpoint$4});return{data:t.data,loading:t.loading,error:t.error}},useUpdateCategory=function(e){var t=useApiRequest({options:e,endpoint:endpoint$4,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useDeleteCategory=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$4,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoint$5="tags",useTags=function(e){var t=useApiRequest({options:e,endpoint:endpoint$5});return{data:t.data,loading:t.loading,error:t.error}},useCreateTag=function(e){var t=useApiRequest({options:e,endpoint:endpoint$5,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveTag=function(e){var t=useApiRequest({options:e,endpoint:endpoint$5});return{data:t.data,loading:t.loading,error:t.error}},useUpdateTag=function(e){var t=useApiRequest({options:e,endpoint:endpoint$5,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useDeleteTag=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$5,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoint$6="pages",usePages=function(e){var t=useApiRequest({options:e,endpoint:endpoint$6});return{data:t.data,loading:t.loading,error:t.error}},useCreatePage=function(e){var t=useApiRequest({options:e,endpoint:endpoint$6,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrievePage=function(e){var t=useApiRequest({options:e,endpoint:endpoint$6});return{data:t.data,loading:t.loading,error:t.error}},useUpdatePage=function(e){var t=useApiRequest({options:e,endpoint:endpoint$6,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useDeletePage=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$6,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoint$7="pages",usePageRevisions=function(e,t){var o=useApiRequest({options:t,endpoint:endpoint$7+"/"+e+"/revisions"});return{data:o.data,loading:o.loading,error:o.error}},useCreatePageRevision=function(e,t){var o=useApiRequest({options:t,endpoint:endpoint$7+"/"+e+"/autosaves",requsetMethod:"post"});return{data:o.data,loading:o.loading,error:o.error}},useRetrievePageRevision=function(e,t,o){var r=useApiRequest({options:o,endpoint:endpoint$7+"/"+e+"/"+t});return{data:r.data,loading:r.loading,error:r.error}},useDeletePageRevision=function(e,t,o){var r=useApiRequest({id:t,options:o,endpoint:endpoint$7+"/"+e+"/revisions",requsetMethod:"delete"});return{data:r.data,loading:r.loading,error:r.error}},endpoint$8="comments",useComments=function(e){var t=useApiRequest({options:e,endpoint:endpoint$8});return{data:t.data,loading:t.loading,error:t.error}},useCreateComment=function(e){var t=useApiRequest({options:e,endpoint:endpoint$8,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveComment=function(e){var t=useApiRequest({options:e,endpoint:endpoint$8});return{data:t.data,loading:t.loading,error:t.error}},useUpdateComment=function(e){var t=useApiRequest({options:e,endpoint:endpoint$8,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useDeleteComment=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$8,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoint$9="taxonomies",useRetrieveTaxonomies=function(e){var t=useApiRequest({options:e,endpoint:endpoint$9});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveTaxonomy=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$9});return{data:o.data,loading:o.loading,error:o.error}},endpoint$a="media",useMedia=function(e){var t=useApiRequest({options:e,endpoint:endpoint$a});return{data:t.data,loading:t.loading,error:t.error}},useCreateMedia=function(e){var t=useApiRequest({options:e,endpoint:endpoint$a,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveMedia=function(e){var t=useApiRequest({options:e,endpoint:endpoint$a});return{data:t.data,loading:t.loading,error:t.error}},useUpdateMedia=function(e){var t=useApiRequest({options:e,endpoint:endpoint$a,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useDeleteMedia=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$a,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoint$b="users",useUsers=function(e){var t=useApiRequest({options:e,endpoint:endpoint$b});return{data:t.data,loading:t.loading,error:t.error}},useCreateUser=function(e){var t=useApiRequest({options:e,endpoint:endpoint$b,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveUser=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$b});return{data:o.data,loading:o.loading,error:o.error}},useUpdateUser=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$b,requsetMethod:"post"});return{data:o.data,loading:o.loading,error:o.error}},useDeleteUser=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$b,requsetMethod:"delete"});return{data:o.data,loading:o.loading,error:o.error}},endpoint$c="types",useRetrieveTypes=function(e){var t=useApiRequest({options:e,endpoint:endpoint$c});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveType=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$c});return{data:o.data,loading:o.loading,error:o.error}},endpoint$d="statuses",useRetrieveStatuses=function(e){var t=useApiRequest({options:e,endpoint:endpoint$d});return{data:t.data,loading:t.loading,error:t.error}},useRetrieveStatus=function(e,t){var o=useApiRequest({id:e,options:t,endpoint:endpoint$d});return{data:o.data,loading:o.loading,error:o.error}},endpoint$e="settings",useSettings=function(){var e=useApiRequest({endpoint:endpoint$e});return{data:e.data,loading:e.loading,error:e.error}},useUpdateSetting=function(e){var t=useApiRequest({options:e,endpoint:endpoint$e,requsetMethod:"post"});return{data:t.data,loading:t.loading,error:t.error}},endpoint$f="themes",useThemes=function(e){var t=useApiRequest({options:e,endpoint:endpoint$f});return{data:t.data,loading:t.loading,error:t.error}},endpoint$g="search",useSearch=function(e){var t=useApiRequest({options:e,endpoint:endpoint$g});return{data:t.data,loading:t.loading,error:t.error}};exports.WPContext=WPContext,exports.useBlocks=useBlocks,exports.useCategories=useCategories,exports.useComments=useComments,exports.useCreateBlock=useCreateBlock,exports.useCreateBlockRevision=useCreateBlockRevision,exports.useCreateCategory=useCreateCategory,exports.useCreateComment=useCreateComment,exports.useCreateMedia=useCreateMedia,exports.useCreatePage=useCreatePage,exports.useCreatePageRevision=useCreatePageRevision,exports.useCreatePost=useCreatePost,exports.useCreatePostRevision=useCreatePostRevision,exports.useCreateTag=useCreateTag,exports.useCreateUser=useCreateUser,exports.useDeleteBlock=useDeleteBlock,exports.useDeleteCategory=useDeleteCategory,exports.useDeleteComment=useDeleteComment,exports.useDeleteMedia=useDeleteMedia,exports.useDeletePage=useDeletePage,exports.useDeletePageRevision=useDeletePageRevision,exports.useDeletePost=useDeletePost,exports.useDeletePostRevision=useDeletePostRevision,exports.useDeleteTag=useDeleteTag,exports.useDeleteUser=useDeleteUser,exports.useMedia=useMedia,exports.usePageRevisions=usePageRevisions,exports.usePages=usePages,exports.usePostRevisions=usePostRevisions,exports.usePosts=usePosts,exports.useRetrieveBlock=useRetrieveBlock,exports.useRetrieveBlockRenderer=useRetrieveBlockRenderer,exports.useRetrieveBlockRevision=useRetrieveBlockRevision,exports.useRetrieveBlockRevisions=useRetrieveBlockRevisions,exports.useRetrieveCategory=useRetrieveCategory,exports.useRetrieveComment=useRetrieveComment,exports.useRetrieveMedia=useRetrieveMedia,exports.useRetrievePage=useRetrievePage,exports.useRetrievePageRevision=useRetrievePageRevision,exports.useRetrievePost=useRetrievePost,exports.useRetrievePostRevision=useRetrievePostRevision,exports.useRetrieveStatus=useRetrieveStatus,exports.useRetrieveStatuses=useRetrieveStatuses,exports.useRetrieveTag=useRetrieveTag,exports.useRetrieveTaxonomies=useRetrieveTaxonomies,exports.useRetrieveTaxonomy=useRetrieveTaxonomy,exports.useRetrieveType=useRetrieveType,exports.useRetrieveTypes=useRetrieveTypes,exports.useRetrieveUser=useRetrieveUser,exports.useSearch=useSearch,exports.useSettings=useSettings,exports.useTags=useTags,exports.useThemes=useThemes,exports.useUpdateBlock=useUpdateBlock,exports.useUpdateCategory=useUpdateCategory,exports.useUpdateComment=useUpdateComment,exports.useUpdateMedia=useUpdateMedia,exports.useUpdatePage=useUpdatePage,exports.useUpdatePost=useUpdatePost,exports.useUpdateSetting=useUpdateSetting,exports.useUpdateTag=useUpdateTag,exports.useUpdateUser=useUpdateUser,exports.useUsers=useUsers;
//# sourceMappingURL=react-wordpress-hooks.cjs.js.map