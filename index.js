import{S as v,a as p,i as c}from"./assets/vendor-mYwBqgd4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w=document.querySelector(".gallery");function h(t){const a=t.map(({webformatURL:r,largeImageURL:l,tags:e,likes:s,views:n,comments:L,downloads:b})=>`<li class="img-card">
				<a href="${l}">
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
								<p class="data-value" data-views>${n}</p>
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
      </li>`).join("");w.insertAdjacentHTML("beforeend",a),q()}function q(){let t=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});t.refresh(),t.on("error.simplelightbox",function(a){console.log(a)})}const S="13611713-3ff341a8136eabd4453734908";p.defaults.baseURL="https://pixabay.com/api/";p.defaults.params={key:S,image_type:"photo",orientation:"horizontal",safesearch:!0};async function g(t,a,r){return(await p.get("",{params:{q:t,per_page:a,page:r}})).data}const u=document.querySelector(".form"),o=document.querySelector(".loader"),$=document.querySelector(".gallery"),i=document.querySelector(".load-more-btn");let m=15,d=1,f,y;o.classList.add("hidden");i.classList.add("hidden");c.settings({position:"topRight"});u.addEventListener("submit",async t=>{t.preventDefault(),$.innerHTML="";const a=u.querySelector(".form-input").value.trim();if(a===""){c.error({message:"Query is not valid!"});return}a!==f&&(f=a,d=1),o.classList.remove("hidden");try{const r=await g(a,m,d);y=r.totalHits,r&&h(r.hits)}catch(r){c.error({message:r.message})}o.classList.add("hidden"),i.classList.remove("hidden"),u.reset()});i.addEventListener("click",async()=>{try{const t=await g(f,m,d);if(t&&h(t.hits),d+=1,i.classList.add("hidden"),o.classList.remove("hidden"),d>Math.ceil(y/m))return i.classList.add("hidden"),o.classList.add("hidden"),c.error({message:"We're sorry, there are no more posts to load"})}catch(t){c.error({message:t.message})}o.classList.add("hidden"),i.classList.remove("hidden")});
//# sourceMappingURL=index.js.map
