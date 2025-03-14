import{a as p,S as w,i as u}from"./assets/vendor-mYwBqgd4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="13611713-3ff341a8136eabd4453734908";p.defaults.baseURL="https://pixabay.com/api/";p.defaults.params={key:q,image_type:"photo",orientation:"horizontal",safesearch:!0};async function g(t,s,a){return(await p.get("",{params:{q:t,per_page:s,page:a}})).data}const S=document.querySelector(".gallery");let h=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});h.on("error.simplelightbox",function(t){console.log(t)});function y(t){const s=t.map(({webformatURL:a,largeImageURL:o,tags:e,likes:r,views:l,comments:b,downloads:v})=>`<li class="img-card">
				<a href="${o}">
					<img
						class="img"
						src="${a}"
						alt="${e}"
						width="360"
						height="200"
					/>
					<div class="img-data-container">
						<ul class="data">
							<li class="data-item">
								<b class="data-title">Likes</b>
								<p class="data-value" data-likes>${r}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Views</b>
								<p class="data-value" data-views>${l}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Comments</b>
								<p class="data-value" data-comments>${b}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Downloads</b>
								<p class="data-value" data-downloads>${v}</p>
							</li>
						</ul>
					</div>
				</a>
      </li>`).join("");S.insertAdjacentHTML("beforeend",s),h.refresh()}const m=document.querySelector(".form"),n=document.querySelector(".loader"),$=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");let c=15,d=1,f,L;i.classList.add("hidden");u.settings({position:"topRight"});m.addEventListener("submit",async t=>{t.preventDefault(),$.innerHTML="";const s=m.querySelector(".form-input").value.trim();if(s===""){u.error({message:"Query is not valid!"});return}s!==f&&(f=s,d=1),n.classList.add("start");try{const a=await g(s,c,d);L=a.totalHits,a&&y(a.hits),a.hits.length<c?i.classList.add("hidden"):i.classList.remove("hidden")}catch(a){u.error({message:a.message})}n.classList.remove("start"),m.reset()});i.addEventListener("click",async()=>{i.classList.add("hidden"),n.classList.add("start"),d+=1;try{const t=await g(f,c,d);if(t&&(y(t.hits),O(".img-card",3)),t.hits.length<c?i.classList.add("hidden"):i.classList.remove("hidden"),d>Math.ceil(L/c))return n.classList.remove("start"),u.error({message:"We're sorry, there are no more posts to load"})}catch(t){u.error({message:t.message})}n.classList.remove("start")});function O(t,s){const o=document.querySelector(t).getBoundingClientRect().height;window.scrollBy({top:o*s,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
