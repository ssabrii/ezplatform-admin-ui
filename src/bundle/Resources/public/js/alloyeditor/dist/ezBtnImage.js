!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","AlloyEditor","react-dom"],t):"object"==typeof exports?exports.ezBtnImage=t(require("react"),require("AlloyEditor"),require("react-dom")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnImage=t(e.React,e.AlloyEditor,e.ReactDOM))}("undefined"!=typeof self?self:this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=41)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?y=d.concat(y):b=-1,y.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=y.length;t;){for(d=y,y=[];++b<t;)d&&d[b].run();b=-1,t=y.length}d=null,m=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var s,l,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,y=[],m=!1,b=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||m||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,n){t.exports=e},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(5)(o,!0)}else e.exports=n(8)()}).call(t,n(0))},function(e,n){e.exports=t},function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(6),i=n(1),a=n(7),u=function(){};"production"!==t.env.NODE_ENV&&(u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function c(e){var t=e&&(x&&e[x]||e[C]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function s(e){this.message=e,this.stack=""}function l(e){function r(r,c,f,l,p,d,y){if(l=l||P,d=d||f,y!==i){if(n){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=l+":"+f;!o[b]&&a<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[b]=!0,a++)}}return null==c[f]?r?new s(null===c[f]?"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(c,f,l,p,d)}if("production"!==t.env.NODE_ENV)var o={},a=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function p(e){function t(t,n,r,o,i,a){var u=t[n];if(_(u)!==e)return new s("Invalid "+o+" `"+i+"` of type `"+E(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return l(t)}function d(e){function t(t,n,r,o,a){if("function"!=typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new s("Invalid "+o+" `"+a+"` of type `"+_(u)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var f=e(u,c,r,o,a+"["+c+"]",i);if(f instanceof Error)return f}return null}return l(t)}function y(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||P;return new s("Invalid "+o+" `"+i+"` of type `"+T(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return l(t)}function m(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(f(a,e[u]))return null;return new s("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?l(n):("production"!==t.env.NODE_ENV&&u("Invalid argument supplied to oneOf, expected an instance of array."),r)}function b(e){function t(t,n,r,o,a){if("function"!=typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=_(u);if("object"!==c)return new s("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var f in u)if(u.hasOwnProperty(f)){var l=e(u,f,r,o,a+"."+f,i);if(l instanceof Error)return l}return null}return l(t)}function h(e){function n(t,n,r,o,a){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,a,i))return null}return new s("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var a=e[o];if("function"!=typeof a)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(a)+" at index "+o+"."),r}return l(n)}function v(e){function t(t,n,r,o,a){var u=t[n],c=_(u);if("object"!==c)return new s("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var l=e[f];if(l){var p=l(u,f,r,o,a+"."+f,i);if(p)return p}}return null}return l(t)}function g(e){function t(t,n,r,a,u){var c=t[n],f=_(c);if("object"!==f)return new s("Invalid "+a+" `"+u+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var p in l){var d=e[p];if(!d)return new s("Invalid "+a+" `"+u+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(c,p,r,a,u+"."+p,i);if(y)return y}return null}return l(t)}function w(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(w);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!w(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!w(i[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function _(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e;var t=_(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function T(e){return e.constructor&&e.constructor.name?e.constructor.name:P}var x="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",P="<<anonymous>>",S={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return l(r)}(),arrayOf:d,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new s("Invalid "+o+" `"+i+"` of type `"+_(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return l(t)}(),instanceOf:y,node:function(){function e(e,t,n,r,o){return w(e[t])?null:new s("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return l(e)}(),objectOf:b,oneOf:m,oneOfType:h,shape:v,exact:g};return s.prototype=Error.prototype,S.checkPropTypes=a,S.PropTypes=S,S}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var s in n)i.call(n,s)&&(c[s]=n[s]);if(o){u=o(n);for(var l=0;l<u.length;l++)a.call(n,u[l])&&(c[u[l]]=n[u[l]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,u,c){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var s;try{if("function"!=typeof e[f]){var l=Error((u||"React class")+": "+r+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.");throw l.name="Invariant Violation",l}s=e[f](n,f,u,r,null,i)}catch(e){s=e}if(!s||s instanceof Error||o((u||"React class")+": type specification of "+r+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in a)){a[s.message]=!0;var p=c?c():"";o("Failed "+r+" type: "+s.message+(null!=p?p:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(1),a={};o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";function r(){}var o=n(1);e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),c=(r(u),n(3)),f=(r(c),n(4)),s=r(f),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getStateClasses=s.default.ButtonStateClasses.getStateClasses,n.execCommand=s.default.ButtonCommand.execCommand.bind(n),n}return a(t,e),t}(u.Component);t.default=l},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=(r(c),n(3)),s=(r(f),n(9)),l=r(s),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"getWidget",value:function(){var e=this.props.editor.get("nativeEditor"),t=e.getSelection().getStartElement();return e.widgets.getByElement(t)}}]),t}(l.default);t.default=p},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),s=n(10),l=r(s),p=n(3),d=(r(p),n(11)),y=r(d),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"chooseContent",value:function(){var e=this.props.udwIsSelectableMethod?this[this.props.udwIsSelectableMethod]:function(e,t){return t(!0)},t=document.querySelector("#react-udw"),n=document.querySelector('meta[name="CSRF-Token"]').content,r=document.querySelector('meta[name="SiteAccess"]').content,o=document.querySelector('meta[name="LanguageCode"]').content,i=this.props.udwConfigName,a=JSON.parse(document.querySelector('[data-udw-config-name="'+i+'"]').dataset.udwConfig);l.default.render(f.default.createElement(eZ.modules.UniversalDiscovery,Object.assign({onConfirm:this[this.props.udwContentDiscoveredMethod].bind(this),onCancel:function(){return l.default.unmountComponentAtNode(t)},title:this.props.udwTitle,multiple:!1,startingLocationId:window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,restInfo:{token:n,siteaccess:r},canSelectContent:e,cotfAllowedLanguages:[o]},a)),t)}},{key:"setContentInfo",value:function(e){var t=this.getWidget();t.setHref("ezcontent://"+e),t.focus()}}]),t}(y.default);t.default=m},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=(r(c),n(3)),s=(r(f),n(13)),l=r(s),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"isImage",value:function(e,t){console.warn("[DEPRECATED] isImage method is deprecated"),console.warn("[DEPRECATED] it will be removed from ezplatform-admin-ui 2.0"),console.warn("[DEPRECATED] please use richtext_embed_image.content_on_the_fly.allowed_content_types in the UDW config");var n=document.querySelector('meta[name="SiteAccess"]').content,r=new Request(e.item.ContentInfo.Content.ContentType._href,{method:"GET",headers:{Accept:"application/vnd.ez.api.ContentType+json","X-Siteaccess":n},mode:"same-origin",credentials:"same-origin"});fetch(r).then(function(e){return e.json()}).then(function(e){return t(!!e.ContentType.FieldDefinitions.FieldDefinition.find(function(e){return"ezimage"===e.fieldType}))})}}]),t}(l.default);t.default=p},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=r(c),s=n(3),l=(r(s),n(4)),p=r(l),d=n(15),y=r(d),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"isDisabled",value:function(){return!this.props.editor.get("nativeEditor").ezembed.canBeAdded()}},{key:"addImage",value:function(e){var t=e[0].ContentInfo.Content;if(navigator.userAgent.indexOf("Chrome")>-1){var n=window.pageYOffset;this.execCommand(),window.scroll(window.pageXOffset,n)}else this.execCommand();this.setContentInfo(t._id);var r=this.getWidget().setConfig("size","medium").setImageType().setWidgetContent("");r.loadImagePreviewFromCurrentVersion(t.CurrentVersion._href,t.Name),r.setFocused(!0),ReactDOM.unmountComponentAtNode(document.querySelector("#react-udw"))}},{key:"render",value:function(){var e="ae-button ez-btn-ae ez-btn-ae--image "+this.getStateClasses(),t=this.isDisabled(),n=Translator.trans("image_btn.label",{},"alloy_editor");return f.default.createElement("button",{className:e,disabled:t,onClick:this.chooseContent.bind(this),tabIndex:this.props.tabIndex},f.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},f.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#image"})),f.default.createElement("p",{className:"ez-btn-ae__label"},n))}}],[{key:"key",get:function(){return"ezimage"}}]),t}(y.default);t.default=m,p.default.Buttons[m.key]=p.default.EzBtnImage=m,m.defaultProps={command:"ezembed",modifiesSelection:!0,udwTitle:Translator.trans("image_btn.udw.label",{},"alloy_editor"),udwContentDiscoveredMethod:"addImage",udwConfigName:"richtext_embed_image",udwLoadContent:!0}}]).default});
//# sourceMappingURL=ezBtnImage.js.map