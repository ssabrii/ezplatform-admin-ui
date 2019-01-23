!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnLinkEdit=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnLinkEdit=t(e.React,e.AlloyEditor))}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=46)}({0:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?y=p.concat(y):m=-1,y.length&&l())}function l(){if(!v){var e=i(a);v=!0;for(var t=y.length;t;){for(p=y,y=[];++m<t;)p&&p[m].run();m=-1,t=y.length}p=null,v=!1,o(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,y=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new u(e,t)),1!==y.length||v||i(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},1:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2:function(t,n){t.exports=e},3:function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(5)(i,!0)}else e.exports=n(8)()}).call(t,n(0))},4:function(e,n){e.exports=t},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),c=r(u),s=n(3),f=(r(s),n(4)),d=r(f),p=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.getInitialState(),n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(this.getInitialState())}},{key:"componentWillUnmount",value:function(){!this.state.discoveringContent&&this.state.isTemporary&&this.removeLink()}},{key:"getInitialState",value:function(){var e=new CKEDITOR.Link(this.props.editor.get("nativeEditor"),{appendProtocol:!1}),t=e.getFromSelection(),n="",r="",i="",o=!1;return t?(n=t.getAttribute("href"),r=t.hasAttribute("target")?t.getAttribute("target"):r,i=t.getAttribute("title"),o=t.hasAttribute("data-ez-temporary-link")):(e.create(n,{"data-ez-temporary-link":!0}),t=e.getFromSelection(),o=!0),{element:t,linkHref:n,linkTarget:r,linkTitle:i,isTemporary:o}}},{key:"selectContent",value:function(){var e=this,t=function(){var t=(e.props.udwIsSelectableMethod,document.querySelector("#react-udw")),n=document.querySelector('meta[name="CSRF-Token"]').content,r=document.querySelector('meta[name="SiteAccess"]').content,i=JSON.parse(document.querySelector('[data-udw-config-name="richtext_embed"]').dataset.udwConfig),o=function(n){e.state.element.setAttribute("href","ezlocation://"+n[0].id),e.invokeWithFixedScrollbar(function(){e.focusEditedLink()}),ReactDOM.unmountComponentAtNode(t)},a=Translator.trans("link_edit_btn.udw.title",{},"alloy_editor");ReactDOM.render(c.default.createElement(eZ.modules.UniversalDiscovery,Object.assign({onConfirm:o,onCancel:function(){return ReactDOM.unmountComponentAtNode(t)},title:a,multiple:!1,startingLocationId:window.eZ.adminUiConfig.universalDiscoveryWidget.startingLocationId,restInfo:{token:n,siteaccess:r}},i)),t)};this.setState({discoveringContent:!0},t.bind(this))}},{key:"focusEditedLink",value:function(){var e=this.props.editor.get("nativeEditor");e.focus(),e.eZ.moveCaretToElement(e,this.state.element),e.fire("actionPerformed",this),this.showUI()}},{key:"showUI",value:function(){this.props.editor.get("nativeEditor").fire("editorInteraction",{editor:this.props.editor,selectionData:{element:this.state.element,region:this.getRegion()}})}},{key:"getRegion",value:function(){var e=this.state.element.getWindow().getScrollPosition(),t=this.state.element.getClientRect();return t.top+=e.y,t.bottom+=e.y,t.left+=e.x,t.right+=e.x,t.direction=CKEDITOR.SELECTION_TOP_TO_BOTTOM,t}},{key:"renderUDWRow",value:function(){var e=Translator.trans("link_edit_btn.button_row.select_content",{},"alloy_editor"),t=Translator.trans("link_edit_btn.button_row.separator",{},"alloy_editor"),n=Translator.trans("link_edit_btn.button_row.link_to",{},"alloy_editor"),r=Translator.trans("link_edit_btn.button_row.block.placeholder.text",{},"alloy_editor");return c.default.createElement("div",{className:"ez-ae-edit-link__row"},c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--udw"},c.default.createElement("button",{className:"ez-ae-button ez-btn-ae ez-btn-ae--udw btn btn-gray",onClick:this.selectContent.bind(this)},e)),c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--separator"},c.default.createElement("span",{className:"ez-ae-edit-link__text"},t)),c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--url"},c.default.createElement("label",{className:"ez-ae-edit-link__label"},n),c.default.createElement("input",{className:"ae-input ez-ae-edit-link__input",onChange:this.setHref.bind(this),onKeyDown:this.handleKeyDown.bind(this),placeholder:r,type:"text",value:this.state.linkHref}),c.default.createElement("button",{"aria-label":d.default.Strings.clearInput,className:"ez-btn-ae ez-btn-ae--clear-link ae-button ae-icon-remove",onClick:this.clearLink.bind(this),title:d.default.Strings.clear})))}},{key:"renderInfoRow",value:function(){var e=this.state.linkTarget,t=Translator.trans("link_edit_btn.info_row.title",{},"alloy_editor"),n=Translator.trans("link_edit_btn.info_row.open_in.label",{},"alloy_editor"),r=Translator.trans("link_edit_btn.info_row.same_tab",{},"alloy_editor"),i=Translator.trans("link_edit_btn.info_row.new_tab",{},"alloy_editor");return c.default.createElement("div",{className:"ez-ae-edit-link__row"},c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--title"},c.default.createElement("label",{className:"ez-ae-edit-link__label"},t),c.default.createElement("input",{type:"text",className:"ae-input ez-ae-edit-link__input",onChange:this.setTitle.bind(this),value:this.state.linkTitle})),c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--target"},c.default.createElement("span",{className:"ez-ae-edit-link__text"},n),c.default.createElement("div",{className:"ez-ae-edit-link__choice"},c.default.createElement("label",{htmlFor:"ez-ae-link-target-same",className:"ez-ae-edit-link__label ez-ae-edit-link__label--same-tab"},c.default.createElement("input",{type:"radio",name:"target",id:"ez-ae-link-target-same",value:"",defaultChecked:""===e,onChange:this.setTarget.bind(this)}),c.default.createElement("span",null,r)),c.default.createElement("label",{htmlFor:"ez-ae-link-target-blank",className:"ez-ae-edit-link__label ez-ae-edit-link__label--new-tab"},c.default.createElement("input",{type:"radio",name:"target",id:"ez-ae-link-target-blank",value:"_blank",defaultChecked:"_blank"===e,onChange:this.setTarget.bind(this)}),c.default.createElement("span",null,i)))))}},{key:"renderActionRow",value:function(){var e=Translator.trans("link_edit_btn.action_row.remove",{},"alloy_editor"),t=Translator.trans("link_edit_btn.action_row.save",{},"alloy_editor");return c.default.createElement("div",{className:"ez-ae-edit-link__row ez-ae-edit-link__row--actions"},c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--actions"},c.default.createElement("button",{className:"ez-btn-ae ez-btn-ae--remove-link btn btn-gray",disabled:this.state.isTemporary,onClick:this.removeLink.bind(this)},e),c.default.createElement("button",{className:"ez-btn-ae ez-btn-ae--save-link btn btn-secondary",disabled:!this.state.linkHref,onClick:this.saveLink.bind(this)},t)))}},{key:"render",value:function(){var e="ez-ae-edit-link";return this.state.linkHref&&(e+=" is-linked"),c.default.createElement("div",{className:e},this.renderUDWRow(),this.renderInfoRow(),this.renderActionRow())}},{key:"clearLink",value:function(){this.setState({linkHref:""})}},{key:"handleKeyDown",value:function(e){var t=this;if(13!==e.keyCode&&27!==e.keyCode||e.preventDefault(),13===e.keyCode&&e.target.value)this.saveLink();else if(27===e.keyCode){var n=this.props.editor.get("nativeEditor");new CKEDITOR.Link(n).advanceSelection(),this.invokeWithFixedScrollbar(function(){n.fire("actionPerformed",t)})}}},{key:"setHref",value:function(e){this.setState({linkHref:e.target.value})}},{key:"setTitle",value:function(e){this.setState({linkTitle:e.target.value})}},{key:"setTarget",value:function(e){this.setState({linkTarget:e.target.value})}},{key:"removeLink",value:function(){var e=this,t=this.props.editor.get("nativeEditor"),n=new CKEDITOR.Link(t),r=t.getSelection(),i=r.createBookmarks();n.remove(this.state.element,{advance:!0}),r.selectBookmarks(i),this.props.cancelExclusive(),this.invokeWithFixedScrollbar(function(){t.fire("actionPerformed",e)})}},{key:"saveLink",value:function(){var e=this;this.setState({isTemporary:!1},function(){return e.updateLink()})}},{key:"updateLink",value:function(){var e=this,t=this.props.editor.get("nativeEditor"),n=new CKEDITOR.Link(t),r={target:this.state.linkTarget,title:this.state.linkTitle,"data-ez-temporary-link":!!this.state.isTemporary||null},i={advance:!0};this.state.linkHref&&(r.href=this.state.linkHref,n.update(r,this.state.element,i),this.invokeWithFixedScrollbar(function(){t.fire("actionPerformed",e)})),this.props.cancelExclusive()}},{key:"invokeWithFixedScrollbar",value:function(e){if(navigator.userAgent.indexOf("Chrome")>-1){var t=window.pageYOffset;e(),window.scroll(window.pageXOffset,t)}else e()}}],[{key:"key",get:function(){return"ezlinkedit"}}]),t}(u.Component);t.default=p,d.default.Buttons[p.key]=d.default.ButtonLinkEdit=p},5:function(e,t,n){"use strict";(function(t){function r(){return null}var i=n(6),o=n(1),a=n(7),l=function(){};"production"!==t.env.NODE_ENV&&(l=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function u(e){var t=e&&(x&&e[x]||e[S]);if("function"==typeof t)return t}function c(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function s(e){this.message=e,this.stack=""}function f(e){function r(r,u,c,f,d,p,y){if(f=f||z,p=p||c,y!==o){if(n){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var m=f+":"+c;!i[m]&&a<3&&(l("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),i[m]=!0,a++)}}return null==u[c]?r?new s(null===u[c]?"The "+d+" `"+p+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+d+" `"+p+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(u,c,f,d,p)}if("production"!==t.env.NODE_ENV)var i={},a=0;var u=r.bind(null,!1);return u.isRequired=r.bind(null,!0),u}function d(e){function t(t,n,r,i,o,a){var l=t[n];if(w(l)!==e)return new s("Invalid "+i+" `"+o+"` of type `"+E(l)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function p(e){function t(t,n,r,i,a){if("function"!=typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var l=t[n];if(!Array.isArray(l)){return new s("Invalid "+i+" `"+a+"` of type `"+w(l)+"` supplied to `"+r+"`, expected an array.")}for(var u=0;u<l.length;u++){var c=e(l,u,r,i,a+"["+u+"]",o);if(c instanceof Error)return c}return null}return f(t)}function y(e){function t(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||z;return new s("Invalid "+i+" `"+o+"` of type `"+O(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(t)}function v(e){function n(t,n,r,i,o){for(var a=t[n],l=0;l<e.length;l++)if(c(a,e[l]))return null;return new s("Invalid "+i+" `"+o+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&l("Invalid argument supplied to oneOf, expected an instance of array."),r)}function m(e){function t(t,n,r,i,a){if("function"!=typeof e)return new s("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],u=w(l);if("object"!==u)return new s("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var c in l)if(l.hasOwnProperty(c)){var f=e(l,c,r,i,a+"."+c,o);if(f instanceof Error)return f}return null}return f(t)}function h(e){function n(t,n,r,i,a){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,n,r,i,a,o))return null}return new s("Invalid "+i+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&l("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var i=0;i<e.length;i++){var a=e[i];if("function"!=typeof a)return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+T(a)+" at index "+i+"."),r}return f(n)}function b(e){function t(t,n,r,i,a){var l=t[n],u=w(l);if("object"!==u)return new s("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var d=f(l,c,r,i,a+"."+c,o);if(d)return d}}return null}return f(t)}function k(e){function t(t,n,r,a,l){var u=t[n],c=w(u);if("object"!==c)return new s("Invalid "+a+" `"+l+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var d in f){var p=e[d];if(!p)return new s("Invalid "+a+" `"+l+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(u,d,r,a,l+"."+d,o);if(y)return y}return null}return f(t)}function _(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(_);if(null===t||e(t))return!0;var n=u(t);if(!n)return!1;var r,i=n.call(t);if(n!==t.entries){for(;!(r=i.next()).done;)if(!_(r.value))return!1}else for(;!(r=i.next()).done;){var o=r.value;if(o&&!_(o[1]))return!1}return!0;default:return!1}}function g(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function w(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":g(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e;var t=w(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function T(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function O(e){return e.constructor&&e.constructor.name?e.constructor.name:z}var x="function"==typeof Symbol&&Symbol.iterator,S="@@iterator",z="<<anonymous>>",N={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:function(){return f(r)}(),arrayOf:p,element:function(){function t(t,n,r,i,o){var a=t[n];if(!e(a)){return new s("Invalid "+i+" `"+o+"` of type `"+w(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:y,node:function(){function e(e,t,n,r,i){return _(e[t])?null:new s("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:m,oneOf:v,oneOfType:h,shape:b,exact:k};return s.prototype=Error.prototype,N.checkPropTypes=a,N.PropTypes=N,N}}).call(t,n(0))},6:function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var s in n)o.call(n,s)&&(u[s]=n[s]);if(i){l=i(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(u[l[f]]=n[l[f]])}}return u}},7:function(e,t,n){"use strict";(function(t){function r(e,n,r,l,u){if("production"!==t.env.NODE_ENV)for(var c in e)if(e.hasOwnProperty(c)){var s;try{if("function"!=typeof e[c]){var f=Error((l||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw f.name="Invariant Violation",f}s=e[c](n,c,l,r,null,o)}catch(e){s=e}if(!s||s instanceof Error||i((l||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in a)){a[s.message]=!0;var d=u?u():"";i("Failed "+r+" type: "+s.message+(null!=d?d:""))}}}var i=function(){};if("production"!==t.env.NODE_ENV){var o=n(1),a={};i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(0))},8:function(e,t,n){"use strict";function r(){}var i=n(1);e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}}}).default});
//# sourceMappingURL=ezBtnLinkEdit.js.map