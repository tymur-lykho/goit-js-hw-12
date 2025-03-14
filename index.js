import{a as p,S as v,i as d}from"./assets/vendor-mYwBqgd4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w="13611713-3ff341a8136eabd4453734908";p.defaults.baseURL="https://pixabay.com/api/";p.defaults.params={key:w,image_type:"photo",orientation:"horizontal",safesearch:!0};async function g(t,a,r){return(await p.get("",{params:{q:t,per_page:a,page:r}})).data}const q=document.querySelector(".gallery");function h(t){const a=t.map(({webformatURL:r,largeImageURL:o,tags:e,likes:s,views:l,comments:L,downloads:b})=>`<li class="img-card">
				<a href="${o}">
					<img
						class="img"
						src="${r}"
						alt="${e}"
						width="360"
						height="200"
					/>
					<div class="img-data-container">
						<ul class="data">
							<li class="data-item">
								<b class="data-title">Likes</b>
								<p class="data-value" data-likes>${s}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Views</b>
								<p class="data-value" data-views>${l}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Comments</b>
								<p class="data-value" data-comments>${L}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Downloads</b>
								<p class="data-value" data-downloads>${b}</p>
							</li>
						</ul>
					</div>
				</a>
      </li>`).join("");q.insertAdjacentHTML("beforeend",a),S()}function S(){let t=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});t.refresh(),t.on("error.simplelightbox",function(a){console.log(a)})}const u=document.querySelector(".form"),n=document.querySelector(".loader"),$=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");let m=15,c=1,f,y;i.classList.add("hidden");d.settings({position:"topRight"});u.addEventListener("submit",async t=>{t.preventDefault(),$.innerHTML="";const a=u.querySelector(".form-input").value.trim();if(a===""){d.error({message:"Query is not valid!"});return}a!==f&&(f=a,c=1),n.classList.add("start");try{const r=await g(a,m,c);y=r.totalHits,r&&h(r.hits)}catch(r){d.error({message:r.message})}n.classList.remove("start"),i.classList.remove("hidden"),u.reset()});i.addEventListener("click",async()=>{i.classList.add("hidden"),n.classList.add("start");try{const t=await g(f,m,c);if(t&&(h(t.hits),O(".img-card",3)),c+=1,c>Math.ceil(y/m))return i.classList.add("hidden"),n.classList.remove("start"),d.error({message:"We're sorry, there are no more posts to load"})}catch(t){d.error({message:t.message})}n.classList.remove("start"),i.classList.remove("hidden")});function O(t,a){const o=document.querySelector(t).getBoundingClientRect().height;window.scrollBy({top:o*a,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
