import{S as a,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m=new a(".list-class a",{});m.on("show.simplelightbox",function(){});const f="44855126-e7e59ad0378cdd72f172648f5";document.querySelector(".input");const d=document.querySelector(".list-class");document.querySelector(".start-btn");const g=document.querySelector(".input-button");function h(t){return fetch(`https://pixabay.com/api/?key=${f}&q=${t}`).then(s=>{if(console.log(s),!s.ok)throw new Error(s.status);return s.json()})}h("dogs").then(t=>{console.log(t),d.insertAdjacentHTML("beforeend",i(t))}).catch(t=>console.error(t));function i({hits:t}){t.map((s,r,c,e,o,n,l)=>`
    <li class = "gallery-item"><a class="gallery-link" href="${r}">
      <img src="${s}" alt="${c}" class="gallery-img">
      <h2 class="category js-likes">Likes</h2>
      <p class="numbers js-likes-num">'${e}'</p>
      <h2 class="category js-views">Views</h2>
      <p class="numbers js-views-num">'${o}'</p>
      <h2 class="category js-comments"></h2>
      <p class="numbers js-comments-num">'${n}'</p>
      <h2 class="category js-downloads"></h2>
      <p class="numbers js-downloads-num">'${l}'</p>
    </a></li>
    `).join("")}g.addEventListener("submit",p);function p(t){t.preventDefault();const s=t.currentTarget,r=s.elements.inputf.value;console.log(r),getPicture(r).then(i).catch(y),s.reset()}function y(t){u.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
