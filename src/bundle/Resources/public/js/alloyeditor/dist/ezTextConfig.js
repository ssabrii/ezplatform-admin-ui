!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("AlloyEditor")):"function"==typeof define&&define.amd?define(["AlloyEditor"],t):"object"==typeof exports?exports.ezTextConfig=t(require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezTextConfig=t(e.AlloyEditor))}("undefined"!=typeof self?self:this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=63)}({4:function(t,r){t.exports=e},63:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(4),l=function(e){return e&&e.__esModule?e:{default:e}}(u),f=function(){function e(t){o(this,e),this.name="text",this.buttons=[this.getStyles(t.customStyles),"ezbold","ezitalic","ezunderline","ezsubscript","ezsuperscript","ezquote","ezstrike","ezlink"],this.test=l.default.SelectionTest.text}return i(e,[{key:"getStyles",value:function(){return{name:"styles",cfg:{showRemoveStylesItem:!0,styles:[].concat(n(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]))}}}}]),e}();t.default=f}}).default});
//# sourceMappingURL=ezTextConfig.js.map