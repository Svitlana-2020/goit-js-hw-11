import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="44855126-e7e59ad0378cdd72f172648f5";function f(s){return fetch(`https://pixabay.com/api/?key=${d}&q=${s}&image_type="photo"&orientation="horizontal"&safesearch="true"`).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}const i={inputQ:document.querySelector(".input"),galleryCard:document.querySelector(".list-class"),searchBtn:document.querySelector(".start-btn"),formForm:document.querySelector(".input-button"),loader:document.querySelector(".loader")},l=new m(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!1});function g(s){const r=s.map(({webformatURL:n,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
    <li class = "gallery-item">
    
    <a class="gallery-link" href="${o}">
    <div class="img-container">
            <img 
                class="gallery-img" 
                src="${n}" 
                alt="${e}" 
                />
                </div>
        </a>
       
        <div class="numbers-group">
                 <span class="group">
        <p class="numbers">Likes</p>
        <p class="number">${t}</p>
                </span>
                    <span class="group">
        <p class="numbers">Views</p>
         <p class="number">${a}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Comments</p>
        <p class="number">${u}</p>
                    </span>
                    <span class="group">
        <p class="numbers">Downloads</p>
        <p class="number">${p}</p>
                    </span>
        </div>
    </li>
    `).join("");i.galleryCard.insertAdjacentHTML("beforeend",r),l.on("show.simplelightbox",function(){}),l.refresh()}i.formForm.addEventListener("submit",h);function h(s){s.preventDefault();const r=s.currentTarget,n=r.elements.inputf.value.trim();if(i.galleryCard.innerHTML="",i.loader.classList.remove("hidden"),n===""){c.show({message:'"Enter a search query in a search field. Pls try again"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"});return}f(n).then(({hits:o})=>{if(o&&o.length>0)g(o);else return Promise.reject(new Error(""))}).catch(y).finally(()=>{i.loader.classList.add("hidden"),r.reset()})}function y(s){c.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
