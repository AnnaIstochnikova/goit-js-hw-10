const e=document.querySelector(".cat-info"),n=document.querySelector(".breed-select");let t=[];function o(t){const o=`<option value="${t.name}">${t.name}</option>`;n.insertAdjacentHTML("afterbegin",o),function(t){console.log(t);const o=`<div class="box__cat"><img\n    class="cat__image"\n    src="${t.image.url}"\n    alt="${t.name}"\n  />\n  <div class="box__description"><h2>${t.name}</h2>\n  <p>${t.description}</p>\n  <p><h3>Temperament:</h3> ${t.temperament}</p>\n  </div>\n  </>\n  </div>`;e.insertAdjacentHTML("afterbegin",o);const a=`<option value="${t.name}">${t.name}</option>`;n.insertAdjacentHTML("afterbegin",a),console.log(o)}(t)}n.addEventListener("change",(function(n){const a=n.target.value;t.push(a),console.log(t),console.log(t[0]),fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${t[0]}`,{headers:{"x-api-key":"live_aBuxFCpJ1glwoKQiqCgrRj9d4CjKT3MTHnjKCwr34PtLohAh6jObeB2qr0uwjO10"}}).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((n=>{e.append(...n.map(o))})).then((e=>o(e))).catch((e=>console.log(e)))})),n.dispatchEvent(new Event("change")),console.log(t[0]);
//# sourceMappingURL=index.c3d65ab0.js.map
