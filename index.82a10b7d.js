!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return u.default(e)||i.default(e)||c.default(e)||l.default()};var u=s(o("kMC0W")),i=s(o("7AJDX")),l=s(o("8CtQK")),c=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}document.querySelector(".button");var f=document.querySelector(".cat-info"),d=document.querySelector(".breed-select");d.addEventListener("change",(function(e){localStorage.setItem("CHOSEN_CAT",e.target.value),fetch(v).then((function(e){return _(e)})).catch((function(e){return console.log(e)}))}));var p,g=localStorage.getItem("CHOSEN_CAT");console.log(g),p=g,console.log(p);var v=function(e){return"live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10"};function _(e){console.log(e);var t='<div class="box__cat"><img\n  class="cat__image"\n  src="'.concat(e.image.url,'"\n  alt="').concat(e.name,'"\n/>\n<div class="box__description"><h2>').concat(e.name,"</h2>\n<p>").concat(e.description,"</p>\n<p><h3>Temperament:</h3> ").concat(e.temperament,"</p>\n</div>\n</>\n</div>");f.insertAdjacentHTML("afterbegin",t);var r='<option value="'.concat(e.name,'">').concat(e.name,"</option>");d.insertAdjacentHTML("afterbegin",r),console.log(t)}fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10"}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(t){var r;(r=f).append.apply(r,e(a)(t.map(_)))}))}();
//# sourceMappingURL=index.82a10b7d.js.map
