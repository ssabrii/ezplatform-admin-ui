!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnEmbedAlingLeft=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnEmbedAlingLeft=t(e.React,e.AlloyEditor))}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=48)}({0:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function u(){b&&y&&(b=!1,y.length?d=y.concat(d):h=-1,d.length&&a())}function a(){if(!b){var e=o(u);b=!0;for(var t=d.length;t;){for(y=d,d=[];++h<t;)y&&y[h].run();h=-1,t=d.length}y=null,b=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,s,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var y,d=[],b=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new c(e,t)),1!==d.length||b||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},1:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},11:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=(r(c),n(3)),l=(r(f),n(9)),s=r(l),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"getWidget",value:function(){var e=this.props.editor.get("nativeEditor"),t=e.getSelection().getStartElement();return e.widgets.getByElement(t)}}]),t}(s.default);t.default=p},16:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),l=n(3),s=r(l),p=n(4),y=(r(p),n(11)),d=r(y),b=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"isActive",value:function(){return this.getWidget().isAligned(this.props.alignment)}},{key:"applyStyle",value:function(){var e=this.getWidget();this.isActive()?e.unsetAlignment():e.setAlignment(this.props.alignment)}},{key:"render",value:function(){var e="ae-button ez-btn-ae ez-btn-ae--"+this.props.cssClassSuffix+" "+this.getStateClasses(),t="/bundles/ezplatformadminui/img/ez-icons.svg#"+this.props.iconName;return f.default.createElement("button",{className:e,onClick:this.applyStyle.bind(this),tabIndex:this.props.tabIndex,title:this.props.label},f.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},f.default.createElement("use",{xlinkHref:t})))}}]),t}(d.default);t.default=b,b.propTypes={editor:s.default.object.isRequired,label:s.default.string.isRequired,tabIndex:s.default.number.isRequired,alignment:s.default.string.isRequired,iconName:s.default.string.isRequired,cssClassSuffix:s.default.string.isRequired}},2:function(t,n){t.exports=e},3:function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(5)(o,!0)}else e.exports=n(8)()}).call(t,n(0))},4:function(e,n){e.exports=t},48:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=(r(c),n(3)),l=(r(f),n(4)),s=r(l),p=n(16),y=r(p),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,null,[{key:"key",get:function(){return"ezembedleft"}}]),t}(y.default);t.default=d,s.default.Buttons[d.key]=s.default.EzEmbedAlignLeft=d,d.defaultProps={alignment:"left",iconName:"image-left",cssClassSuffix:"embed-left",label:Translator.trans("embed_align_left_btn.label",{},"alloy_editor")}},5:function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(6),i=n(1),u=n(7),a=function(){};"production"!==t.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function c(e){var t=e&&(T&&e[T]||e[P]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function s(e){function r(r,c,f,s,p,y,d){if(s=s||k,y=y||f,d!==i){if(n){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var h=s+":"+f;!o[h]&&u<3&&(a("You are manually calling a React.PropTypes validation function for the `"+y+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[h]=!0,u++)}}return null==c[f]?r?new l(null===c[f]?"The "+p+" `"+y+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+p+" `"+y+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(c,f,s,p,y)}if("production"!==t.env.NODE_ENV)var o={},u=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function p(e){function t(t,n,r,o,i,u){var a=t[n];if(_(a)!==e)return new l("Invalid "+o+" `"+i+"` of type `"+E(a)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return s(t)}function y(e){function t(t,n,r,o,u){if("function"!=typeof e)return new l("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){return new l("Invalid "+o+" `"+u+"` of type `"+_(a)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<a.length;c++){var f=e(a,c,r,o,u+"["+c+"]",i);if(f instanceof Error)return f}return null}return s(t)}function d(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var u=e.name||k;return new l("Invalid "+o+" `"+i+"` of type `"+x(t[n])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return s(t)}function b(e){function n(t,n,r,o,i){for(var u=t[n],a=0;a<e.length;a++)if(f(u,e[a]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?s(n):("production"!==t.env.NODE_ENV&&a("Invalid argument supplied to oneOf, expected an instance of array."),r)}function h(e){function t(t,n,r,o,u){if("function"!=typeof e)return new l("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],c=_(a);if("object"!==c)return new l("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var f in a)if(a.hasOwnProperty(f)){var s=e(a,f,r,o,u+"."+f,i);if(s instanceof Error)return s}return null}return s(t)}function v(e){function n(t,n,r,o,u){for(var a=0;a<e.length;a++){if(null==(0,e[a])(t,n,r,o,u,i))return null}return new l("Invalid "+o+" `"+u+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var u=e[o];if("function"!=typeof u)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(u)+" at index "+o+"."),r}return s(n)}function m(e){function t(t,n,r,o,u){var a=t[n],c=_(a);if("object"!==c)return new l("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var s=e[f];if(s){var p=s(a,f,r,o,u+"."+f,i);if(p)return p}}return null}return s(t)}function g(e){function t(t,n,r,u,a){var c=t[n],f=_(c);if("object"!==f)return new l("Invalid "+u+" `"+a+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var s=o({},t[n],e);for(var p in s){var y=e[p];if(!y)return new l("Invalid "+u+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=y(c,p,r,u,a+"."+p,i);if(d)return d}return null}return s(t)}function O(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(O);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!O(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!O(i[1]))return!1}return!0;default:return!1}}function w(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function _(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e;var t=_(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function x(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var T="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",k="<<anonymous>>",S={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return s(r)}(),arrayOf:y,element:function(){function t(t,n,r,o,i){var u=t[n];if(!e(u)){return new l("Invalid "+o+" `"+i+"` of type `"+_(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return s(t)}(),instanceOf:d,node:function(){function e(e,t,n,r,o){return O(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return s(e)}(),objectOf:h,oneOf:b,oneOfType:v,shape:m,exact:g};return l.prototype=Error.prototype,S.checkPropTypes=u,S.PropTypes=S,S}}).call(t,n(0))},6:function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,c=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var l in n)i.call(n,l)&&(c[l]=n[l]);if(o){a=o(n);for(var s=0;s<a.length;s++)u.call(n,a[s])&&(c[a[s]]=n[a[s]])}}return c}},7:function(e,t,n){"use strict";(function(t){function r(e,n,r,a,c){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var l;try{if("function"!=typeof e[f]){var s=Error((a||"React class")+": "+r+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.");throw s.name="Invariant Violation",s}l=e[f](n,f,a,r,null,i)}catch(e){l=e}if(!l||l instanceof Error||o((a||"React class")+": type specification of "+r+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var p=c?c():"";o("Failed "+r+" type: "+l.message+(null!=p?p:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(1),u={};o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(0))},8:function(e,t,n){"use strict";function r(){}var o=n(1);e.exports=function(){function e(e,t,n,r,i,u){if(u!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),c=(r(a),n(3)),f=(r(c),n(4)),l=r(f),s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getStateClasses=l.default.ButtonStateClasses.getStateClasses,n.execCommand=l.default.ButtonCommand.execCommand.bind(n),n}return u(t,e),t}(a.Component);t.default=s}}).default});
//# sourceMappingURL=ezBtnEmbedAlingLeft.js.map