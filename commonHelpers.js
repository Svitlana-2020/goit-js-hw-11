import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=new l(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",spinner:!0}),m="44855126-e7e59ad0378cdd72f172648f5";document.querySelector(".input");const f=document.querySelector(".list-class");document.querySelector(".start-btn");const d=document.querySelector(".input-button");d.addEventListener("submit",p);function p(r){r.preventDefault();const o=r.currentTarget,n=o.elements.inputf.value;console.log(n),g(n).then(s=>{console.log(s.hits);const e=s.hits,t=h(e);console.log(t),f.insertAdjacentHTML("beforeend",t)}).catch(y),o.reset()}function g(r){return fetch(`https://pixabay.com/api/?key=${m}&q=${r}`).then(o=>{if(console.log(o),!o.ok)throw new Error(o.status);return o.json()})}function h({array:r}){return r.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:c})=>`
                            <li class = "gallery-item"><a class="gallery-link" href="${n}">
                                <a class="gallery-link" href="${original}">
                                    <img 
                                        class="gallery-img" 
                                        src="${o}" 
                                        alt="${s}" 
                                        />
                                </a>
                                <p class="numbers js-likes-num">'Likes ${e}'</p>
                                <p class="numbers js-views-num">'Views ${t}'</p>
                                <p class="numbers js-comments-num">'Comments ${i}'</p>
                                <p class="numbers js-downloads-num">'Downloads ${c}'</p>
                            </li>
                            `).join("")}function y(r){a.show({message:'"Sorry, there are no images matching your search query. Please try again!"',messageColor:"white",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight"})}u.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
