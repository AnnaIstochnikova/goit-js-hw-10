!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return i.default(e)||u.default(e)||l.default(e)||c.default()};var i=s(o("kMC0W")),u=s(o("7AJDX")),c=s(o("8CtQK")),l=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var d=document.querySelector(".cat-info"),f=document.querySelector(".breed-select"),p="https://api.thecatapi.com/v1/images/search?breed_ids=",v="live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10",g=[];function m(e){var t='<option value="'.concat(e.name,'">').concat(e.name,"</option>");f.insertAdjacentHTML("afterbegin",t),function(e){console.log(e);var t='<div class="box__cat"><img\n    class="cat__image"\n    src="'.concat(e.image.url,'"\n    alt="').concat(e.name,'"\n  />\n  <div class="box__description"><h2>').concat(e.name,"</h2>\n  <p>").concat(e.description,"</p>\n  <p><h3>Temperament:</h3> ").concat(e.temperament,"</p>\n  </div>\n  </>\n  </div>");d.insertAdjacentHTML("afterbegin",t);var n='<option value="'.concat(e.name,'">').concat(e.name,"</option>");f.insertAdjacentHTML("afterbegin",n),console.log(t)}(e)}f.addEventListener("change",(function(t){var n=t.target.value;g.push(n),console.log(g),console.log(g[0]),fetch("".concat(p).concat(g[0]),{headers:{"x-api-key":v}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(t){var n;(n=d).append.apply(n,e(a)(t.map(m)))})).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))})),f.dispatchEvent(new Event("change")),console.log(g[0])}();
//# sourceMappingURL=index.c2e5083a.js.map