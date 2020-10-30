/*!
 * Table tool
 * 
 * @version 1.3.1
 * 
 * @package https://github.com/editor-js/table
 * @licence MIT
 * @author CodeX <https://codex.so>
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Table=e():t.Table=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),l=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),s=null,c=0,u=[],h=n(7);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],e))}else{var l=[];for(a=0;a<o.parts.length;a++)l.push(y(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:l}}}}function d(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}function v(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(t.insertAt.before,n);n.insertBefore(e,r)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return _(e,t.attrs),v(t,e),e}function _(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;n=s||(s=b(e)),o=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",_(e,t.attrs),v(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=h(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,n,e),r=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){p(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return f(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(l=i[a.id]).refs--,o.push(l)}t&&f(d(t,e),e);for(r=0;r<o.length;r++){var l;if(0===(l=o[r]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var g,m=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports='<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#388AE5"></circle><path fill="#FFF" d="M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z"></path></svg>'},function(t,e,n){t.exports=n(4)},function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var i=n(13).TableConstructor,a=n(12),l="tc-table__inp",s=function(){function t(e){var n=e.data,o=e.config,r=e.api,a=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.readOnly=a,this._tableConstructor=new i(n,o,r,a)}return r(t,null,[{key:"isReadOnlySupported",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:a,title:"Table"}}}]),r(t,[{key:"render",value:function(){return this._tableConstructor.htmlElement}},{key:"save",value:function(t){for(var e=[],n=t.querySelector("table").rows,o=0;o<n.length;o++){var r=n[o],i=Array.from(r.cells).map(function(t){return t.querySelector("."+l)});i.every(this._isEmpty)||e.push(i.map(function(t){return t.innerHTML}))}return{content:e}}},{key:"_isEmpty",value:function(t){return!t.textContent.trim()}}]),t}();t.exports=s},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"/* tcm - project's prefix*/\n\n.tc-editor {\n  padding: 10px;\n  position: relative;\n  box-sizing: content-box;\n  width: 100%;\n  left: -10px;\n}",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"/* tc - project's prefix*/\n\n.tc-toolbar {\n  background: #368be6;\n\n}\n\n.tc-toolbar--hidden {\n    visibility: hidden;\n  }\n\n.tc-toolbar--hor {\n    width: 100%;\n    height: 21px;\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    position: absolute;\n    left: 0;\n    top: 1px;\n    z-index: 100;\n  }\n\n.tc-toolbar--ver {\n    height: 100%;\n    width: 21px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    left: -1px;\n    z-index: 100;\n  }\n\n.tc-toolbar__plus {\n    height: 21px;\n    width: 21px;\n    margin-top: 0;\n  }\n\n.tc-toolbar__plus--hor {\n      margin-left: -10px;\n    }\n\n.tc-toolbar__plus--ver {\n      margin-top: -10px;\n    }\n\n.tc-toolbar__shine-line--hor {\n      min-height: 1px;\n      width: 100%;\n    }\n\n.tc-toolbar__shine-line--ver {\n      min-width: 1px;\n      height: 100%;\n    }",""])},function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"/* tc- project's prefix*/\n\n.tc-table {\n  width: 100%;\n  height: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.tc-table__wrap {\n    border: 1px solid #DBDBE2;\n    border-radius: 3px;\n    position: relative;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n.tc-table__cell {\n    border: 1px solid #DBDBE2;\n    padding: 0;\n    vertical-align: top;\n  }\n\n.tc-table__area {\n    padding: 10px;\n    height: 100%;\n  }\n\n.tc-table__inp {\n    outline: none;\n    flex-grow: 100;\n    min-height: 1.5em;\n    height: 100%;\n    overflow: hidden;\n  }\n\n.tc-table tbody tr:first-child td {\n    border-top: none;\n  }\n\n.tc-table tbody tr:last-child td {\n    border-bottom: none;\n  }\n\n.tc-table tbody tr td:last-child {\n    border-right: none;\n  }\n\n.tc-table tbody tr td:first-child {\n    border-left: none;\n  }",""])},function(t,e){t.exports='<svg width="18" height="14"><path d="M2.833 8v1.95a1.7 1.7 0 0 0 1.7 1.7h3.45V8h-5.15zm0-2h5.15V2.35h-3.45a1.7 1.7 0 0 0-1.7 1.7V6zm12.3 2h-5.15v3.65h3.45a1.7 1.7 0 0 0 1.7-1.7V8zm0-2V4.05a1.7 1.7 0 0 0-1.7-1.7h-3.45V6h5.15zM4.533.1h8.9a3.95 3.95 0 0 1 3.95 3.95v5.9a3.95 3.95 0 0 1-3.95 3.95h-8.9a3.95 3.95 0 0 1-3.95-3.95v-5.9A3.95 3.95 0 0 1 4.533.1z"></path></svg>'},function(t,e,n){"use strict";n.r(e);n(5);function o(t){return!(null==t)}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=document.createElement(t);if(o(e))for(var a=0;a<e.length;a++)o(e[a])&&i.classList.add(e[a]);if(o(n))for(var l in n)i.setAttribute(l,n[l]);if(o(r))for(var s=0;s<r.length;s++)o(r[s])&&i.appendChild(r[s]);return i}function i(t){var e=t.getBoundingClientRect();return{y1:Math.floor(e.top+window.pageYOffset),x1:Math.floor(e.left+window.pageXOffset),x2:Math.floor(e.right+window.pageXOffset),y2:Math.floor(e.bottom+window.pageYOffset)}}function a(t,e,n){var o;return e-t.x1>=-1&&e-t.x1<=11&&(o="left"),t.x2-e>=-1&&t.x2-e<=11&&(o="right"),n-t.y1>=-1&&n-t.y1<=11&&(o="top"),t.y2-n>=-1&&t.y2-n<=11&&(o="bottom"),o}n(8);var l=n(2),s=n.n(l);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}var _={highlightingLine:"tc-toolbar",hidden:"tc-toolbar--hidden",horizontalToolBar:"tc-toolbar--hor",horizontalHighlightingLine:"tc-toolbar__shine-line--hor",verticalToolBar:"tc-toolbar--ver",verticalHighlightingLine:"tc-toolbar__shine-line--ver",plusButton:"tc-toolbar__plus",horizontalPlusButton:"tc-toolbar__plus--hor",verticalPlusButton:"tc-toolbar__plus--ver",area:"tc-table__area"},y=function(){function t(){v(this,t),this._plusButton=this._generatePlusButton(),this._highlightingLine=this._generateHighlightingLine(),this._toolbar=this._generateToolBar([this._plusButton,this._highlightingLine])}return b(t,[{key:"hide",value:function(){this._toolbar.classList.add(_.hidden)}},{key:"show",value:function(){this._toolbar.classList.remove(_.hidden),this._highlightingLine.classList.remove(_.hidden)}},{key:"hideLine",value:function(){this._highlightingLine.classList.add(_.hidden)}},{key:"_generatePlusButton",value:function(){var t=this,e=r("div",[_.plusButton]);return e.innerHTML=s.a,e.addEventListener("click",function(e){e.stopPropagation();var n=new CustomEvent("click",{detail:{x:e.pageX,y:e.pageY},bubbles:!0});t._toolbar.dispatchEvent(n)}),e}},{key:"_generateHighlightingLine",value:function(){var t=this,e=r("div",[_.highlightingLine]);return e.addEventListener("click",function(e){e.stopPropagation();var n=new CustomEvent("click",{bubbles:!0});t._toolbar.dispatchEvent(n)}),e}},{key:"_generateToolBar",value:function(t){var e=this,n=r("div",[_.hidden],null,t);return n.addEventListener("mouseleave",function(t){e._recalcMousePos(t)}),n}},{key:"_recalcMousePos",value:function(t){this.hide();var e=document.elementFromPoint(t.pageX,t.pageY);if(null!==e&&e.classList.contains(_.area)){var n=new MouseEvent("mouseover",{clientX:t.pageX,clientY:t.pageY});e.dispatchEvent(n)}}},{key:"htmlElement",get:function(){return this._toolbar}}]),t}(),g=function(t){u(n,y);var e=f(n);function n(){var t;return v(this,n),(t=e.call(this))._toolbar.classList.add(_.horizontalToolBar),t._plusButton.classList.add(_.horizontalPlusButton),t._highlightingLine.classList.add(_.horizontalHighlightingLine),t}return b(n,[{key:"showIn",value:function(t){var e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).height)/2);this._toolbar.style.top=t-e+"px",this.show()}}]),n}(),m=function(t){u(n,y);var e=f(n);function n(){var t;return v(this,n),(t=e.call(this))._toolbar.classList.add(_.verticalToolBar),t._plusButton.classList.add(_.verticalPlusButton),t._highlightingLine.classList.add(_.verticalHighlightingLine),t}return b(n,[{key:"showIn",value:function(t){var e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).width)/2);this._toolbar.style.left=t-e+"px",this.show()}}]),n}();n(10);function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var x="tc-table",C="tc-table__inp",T="tc-table__cell",k="tc-table__wrap",E="tc-table__area",B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.readOnly=e,this._numberOfColumns=0,this._numberOfRows=0,this._element=this._createTableWrapper(),this._table=this._element.querySelector("table"),this.readOnly||this._hangEvents()}var e,n,o;return e=t,(n=[{key:"addColumn",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;this._numberOfColumns++;for(var e=this._table.rows,n=0;n<e.length;n++){var o=e[n].insertCell(t);this._fillCell(o)}}},{key:"addRow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;this._numberOfRows++;var e=this._table.insertRow(t);return this._fillRow(e),e}},{key:"_createTableWrapper",value:function(){return r("div",[k],null,[r("table",[x])])}},{key:"_createContenteditableArea",value:function(){return r("div",[C],{contenteditable:!this.readOnly})}},{key:"_fillCell",value:function(t){t.classList.add(T);var e=this._createContenteditableArea();t.appendChild(r("div",[E],null,[e]))}},{key:"_fillRow",value:function(t){for(var e=0;e<this._numberOfColumns;e++){var n=t.insertCell();this._fillCell(n)}}},{key:"_hangEvents",value:function(){var t=this;this._table.addEventListener("focus",function(e){t._focusEditField(e)},!0),this._table.addEventListener("blur",function(e){t._blurEditField(e)},!0),this._table.addEventListener("keydown",function(e){t._pressedEnterInEditField(e)}),this._table.addEventListener("click",function(e){t._clickedOnCell(e)}),this._table.addEventListener("mouseover",function(e){t._mouseEnterInDetectArea(e),e.stopPropagation()},!0)}},{key:"_focusEditField",value:function(t){t.target.classList.contains(C)&&(this._selectedCell=t.target.closest("."+T))}},{key:"_blurEditField",value:function(t){t.target.classList.contains(C)&&(this._selectedCell=null)}},{key:"_pressedEnterInEditField",value:function(t){t.target.classList.contains(C)&&(13!==t.keyCode||t.shiftKey||t.preventDefault())}},{key:"_clickedOnCell",value:function(t){t.target.classList.contains(T)&&t.target.querySelector("."+C).focus()}},{key:"_mouseEnterInDetectArea",value:function(t){if(t.target.classList.contains(E)){var e=a(i(t.target.closest("TD")),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}},{key:"htmlElement",get:function(){return this._element}},{key:"body",get:function(){return this._table}},{key:"selectedCell",get:function(){return this._selectedCell}}])&&w(e.prototype,n),o&&w(e,o),t}();function L(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,"TableConstructor",function(){return S});var O={editor:"tc-editor",toolBarHor:"tc-toolbar--hor",toolBarVer:"tc-toolbar--ver",inputField:"tc-table__inp"},S=function(){function t(e,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.readOnly=i,this._table=new B(i);var a=this._resizeTable(e,n);this._fillTable(e,a),this._container=r("div",[O.editor,o.styles.block],null,[this._table.htmlElement]),this._verticalToolBar=new m,this._horizontalToolBar=new g,this._table.htmlElement.appendChild(this._horizontalToolBar.htmlElement),this._table.htmlElement.appendChild(this._verticalToolBar.htmlElement),this._hoveredCell=null,this._activatedToolBar=null,this._hoveredCellSide=null,this._plusButDelay=null,this._toolbarShowDelay=null,this.readOnly||this._hangEvents()}var e,n,o;return e=t,(n=[{key:"_fillTable",value:function(t,e){if(void 0!==t.content)for(var n=0;n<e.rows&&n<t.content.length;n++)for(var o=0;o<e.cols&&o<t.content[n].length;o++){this._table.body.rows[n].cells[o].querySelector("."+O.inputField).innerHTML=t.content[n][o]}}},{key:"_resizeTable",value:function(t,e){for(var n=Array.isArray(t.content),o=!!n&&t.content.length,r=n?t.content.length:void 0,i=o?t.content[0].length:void 0,a=Number.parseInt(e.rows),l=Number.parseInt(e.cols),s=!isNaN(a)&&a>0?a:void 0,c=!isNaN(l)&&l>0?l:void 0,u=r||s||2,h=i||c||2,f=0;f<u;f++)this._table.addRow();for(var d=0;d<h;d++)this._table.addColumn();return{rows:u,cols:h}}},{key:"_showToolBar",value:function(t,e){this._hideToolBar(),this._activatedToolBar=t,t.showIn(e)}},{key:"_hideToolBar",value:function(){null!==this._activatedToolBar&&this._activatedToolBar.hide()}},{key:"_hangEvents",value:function(){var t=this;this._container.addEventListener("mouseInActivatingArea",function(e){t._toolbarCalling(e)}),this._container.addEventListener("click",function(e){t._clickToolbar(e)}),this._container.addEventListener("input",function(){t._hideToolBar()}),this._container.addEventListener("keydown",function(e){t._containerKeydown(e)}),this._container.addEventListener("mouseout",function(e){t._leaveDetectArea(e)}),this._container.addEventListener("mouseover",function(e){t._mouseEnterInDetectArea(e)})}},{key:"_mouseInActivatingAreaListener",value:function(t){this._hoveredCellSide=t.detail.side;var e=i(t.target),n=i(this._table.htmlElement);if(this._hoveredCell=t.target.closest("TD"),null===this._hoveredCell){this._hoveredCell=this._container,e.x1+=11,e.y1+=11,e.x2-=11,e.y2-=11}"top"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y1-n.y1-2),"bottom"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y2-n.y1-1),"left"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x1-n.x1-2),"right"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x2-n.x1-1)}},{key:"_isToolbar",value:function(t){return!(!t.closest("."+O.toolBarHor)&&!t.closest("."+O.toolBarVer))}},{key:"_leaveDetectArea",value:function(t){this._isToolbar(t.relatedTarget)||(clearTimeout(this._toolbarShowDelay),this._hideToolBar())}},{key:"_toolbarCalling",value:function(t){var e=this;this._isToolbar(t.target)||(clearTimeout(this._toolbarShowDelay),this._toolbarShowDelay=setTimeout(function(){e._mouseInActivatingAreaListener(t)},125))}},{key:"_clickToolbar",value:function(t){var e;if(this._isToolbar(t.target))if(this._activatedToolBar===this._horizontalToolBar?(this._addRow(),e="y"):(this._addColumn(),e="x"),isNaN(t.detail)&&null!==t.detail){var n,o=i(this._table.htmlElement);n="x"===e?t.detail.x-o.x1:t.detail.y-o.y1,this._delayAddButtonForMultiClickingNearMouse(n)}else this._hideToolBar()}},{key:"_containerKeydown",value:function(t){13===t.keyCode&&this._containerEnterPressed(t)}},{key:"_delayAddButtonForMultiClickingNearMouse",value:function(t){var e=this;this._showToolBar(this._activatedToolBar,t),this._activatedToolBar.hideLine(),clearTimeout(this._plusButDelay),this._plusButDelay=setTimeout(function(){e._hideToolBar()},500)}},{key:"_getHoveredSideOfContainer",value:function(){return this._hoveredCell===this._container?this._isBottomOrRight()?0:-1:1}},{key:"_isBottomOrRight",value:function(){return"bottom"===this._hoveredCellSide||"right"===this._hoveredCellSide}},{key:"_addRow",value:function(){var t=this._hoveredCell.closest("TR"),e=this._getHoveredSideOfContainer();1===e&&(e=t.sectionRowIndex,e+=this._isBottomOrRight()),this._table.addRow(e)}},{key:"_addColumn",value:function(){var t=this._getHoveredSideOfContainer();1===t&&(t=this._hoveredCell.cellIndex,t+=this._isBottomOrRight()),this._table.addColumn(t)}},{key:"_containerEnterPressed",value:function(t){if(null!==this._table.selectedCell&&!t.shiftKey){var e=this._table.selectedCell.closest("TR"),n=this._getHoveredSideOfContainer();1===n&&(n=e.sectionRowIndex+1),this._table.addRow(n).cells[0].click()}}},{key:"_mouseEnterInDetectArea",value:function(t){var e=a(i(this._container),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}},{key:"htmlElement",get:function(){return this._container}}])&&L(e.prototype,n),o&&L(e,o),t}()}])});