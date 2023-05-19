webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.global.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/content.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/ThreadTitle/threadtitle.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/header.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Layout/layout.css":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/fast-levenshtein/levenshtein.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/prop-types/lib/has.js":
false,

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.development.js":
false,

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
false,

/***/ "./node_modules/react-hot-loader/index.js":
false,

/***/ "./node_modules/react-hot-loader/root.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./node_modules/webpack/buildin/amd-define.js":
false,

/***/ "./node_modules/webpack/buildin/amd-options.js":
false,

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (17:42)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|         react_1.default.createElement(Header_1.Header, null),\\n|         react_1.default.createElement(Content_1.Content, null,\\n>             react_1.default.createElement(, null))));\\n| }\\n| exports.App = (0, root_1.hot)(AppComponent);\");\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//первое что делаем, это импортируем React и ReactDOM\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n//ВАЖНАЯ ЧАСТЬ:так как в последствии мы будем добавлять сюда SSR\n//нам необходимо сделать так чтобы эта часть кода срабатывала только в браузере\n// поэтому сделаем событие на загрузку страницы. Когда страница загрузится, то зарендерим наше приложение\nwindow.addEventListener('load', function () {\n    //делаем следующую конструкцию ReactDOM.render(). \n    //render({компанент с которого начинается приложение}, {элемент из itml верстки в которую будет монтироваться все что мы написали на React})\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react_root'));\n});\n///теперь создадим файл webpack.config.js\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/main.global.css":
false,

/***/ "./src/shared/Content/Content.tsx":
false,

/***/ "./src/shared/Content/content.css":
false,

/***/ "./src/shared/Content/index.ts":
false,

/***/ "./src/shared/Header/Header.tsx":
false,

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
false,

/***/ "./src/shared/Header/SearchBlock/index.ts":
false,

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
false,

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
false,

/***/ "./src/shared/Header/SortBlock/index.ts":
false,

/***/ "./src/shared/Header/SortBlock/sortblock.css":
false,

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
false,

/***/ "./src/shared/Header/ThreadTitle/index.ts":
false,

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
false,

/***/ "./src/shared/Header/header.css":
false,

/***/ "./src/shared/Header/index.ts":
false,

/***/ "./src/shared/Layout/Layout.tsx":
false,

/***/ "./src/shared/Layout/index.ts":
false,

/***/ "./src/shared/Layout/layout.css":
false

})