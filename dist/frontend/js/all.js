"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function(){console.log(2)},_interopRequireDefault=(exports.default=_default,require("@babel/runtime/helpers/interopRequireDefault")),_tr=_interopRequireDefault(require("./tr")),_aa=_interopRequireDefault(require("./aa"));function hello(){console.log("console.log export works")}console.log("I'm logging from the main.js file."),(0,_tr.default)(),(0,_aa.default)(),console.log("I'm logging from the secondary.js file."),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=hello;