import{S as v,a as p,i as d}from"./assets/vendor-mYwBqgd4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const w=document.querySelector(".gallery");function h(t){const a=t.map(({webformatURL:r,largeImageURL:i,tags:e,likes:s,views:n,comments:L,downloads:b})=>`<li class="img-card">
				<a href="${i}">
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
      </li>`).join("");w.insertAdjacentHTML("beforeend",a),q()}function q(){let t=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});t.refresh(),t.on("error.simplelightbox",function(a){console.log(a)})}const S="13611713-3ff341a8136eabd4453734908";p.defaults.baseURL="https://pixabay.com/api/";p.defaults.params={key:S,image_type:"photo",orientation:"horizontal",safesearch:!0};async function g(t,a,r){return(await p.get("",{params:{q:t,per_page:a,page:r}})).data}const u=document.querySelector(".form"),l=document.querySelector(".loader"),$=document.querySelector(".gallery"),o=document.querySelector(".load-more-btn");let m=15,c=1,f,y;l.classList.add("hidden");o.classList.add("hidden");d.settings({position:"topRight"});u.addEventListener("submit",async t=>{t.preventDefault(),$.innerHTML="";const a=u.querySelector(".form-input").value.trim();if(a===""){d.error({message:"Query is not valid!"});return}a!==f&&(f=a,c=1),l.classList.remove("hidden");try{const r=await g(a,m,c);y=r.totalHits,r&&h(r.hits)}catch(r){d.error({message:r.message})}l.classList.add("hidden"),o.classList.remove("hidden"),u.reset()});o.addEventListener("click",async()=>{try{const t=await g(f,m,c);if(t&&(h(t.hits),O(".img-card",3)),c+=1,o.classList.add("hidden"),l.classList.remove("hidden"),c>Math.ceil(y/m))return o.classList.add("hidden"),l.classList.add("hidden"),d.error({message:"We're sorry, there are no more posts to load"})}catch(t){d.error({message:t.message})}l.classList.add("hidden"),o.classList.remove("hidden")});function O(t,a){const i=document.querySelector(t).getBoundingClientRect().height;window.scrollBy({top:i*a,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
