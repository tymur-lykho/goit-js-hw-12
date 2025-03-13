import{S as f,a as d,i as c}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const p=document.querySelector(".gallery");function g(r){const t=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:a,views:o,comments:u,downloads:m})=>`<li class="img-card">
				<a href="${i}">
					<img
						class="img"
						src="${s}"
						alt="${e}"
						width="360"
						height="200"
					/>
					<div class="img-data-container">
						<ul class="data">
							<li class="data-item">
								<b class="data-title">Likes</b>
								<p class="data-value" data-likes>${a}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Views</b>
								<p class="data-value" data-views>${o}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Comments</b>
								<p class="data-value" data-comments>${u}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Downloads</b>
								<p class="data-value" data-downloads>${m}</p>
							</li>
						</ul>
					</div>
				</a>
      </li>`).join("");p.innerHTML=t,h()}function h(){let r=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});r.refresh(),r.on("error.simplelightbox",function(t){console.log(t)})}const y="13611713-3ff341a8136eabd4453734908";d.defaults.baseURL="https://pixabay.com/api/";d.defaults.params={key:y,image_type:"photo",orientation:"horizontal",safesearch:!0};function b(r){return d.get("",{params:{q:r}}).then(t=>{if(t.data.hits.length<1)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.data.hits}).catch(t=>{throw new Error(t.message)})}const n=document.querySelector(".form"),l=document.querySelector(".loader"),L=document.querySelector(".gallery");l.classList.add("hidden");c.settings({position:"topRight"});n.addEventListener("submit",r=>{r.preventDefault();const t=n.querySelector(".form-input").value;if(t.trim()===""){c.error({message:"Query is not valid!"});return}L.innerHTML="",l.classList.remove("hidden"),console.log(l.classList),b(t).then(s=>{s&&g(s)}).catch(s=>{c.error({message:s.message})}).finally(()=>{l.classList.add("hidden"),n.reset()})});
//# sourceMappingURL=index.js.map
