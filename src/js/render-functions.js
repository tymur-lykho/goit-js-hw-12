import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export default function renderContent(data) {
  const markup = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="img-card">
				<a href="${largeImageURL}">
					<img
						class="img"
						src="${webformatURL}"
						alt="${tags}"
						width="360"
						height="200"
					/>
					<div class="img-data-container">
						<ul class="data">
							<li class="data-item">
								<b class="data-title">Likes</b>
								<p class="data-value" data-likes>${likes}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Views</b>
								<p class="data-value" data-views>${views}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Comments</b>
								<p class="data-value" data-comments>${comments}</p>
							</li>
							<li class="data-item">
								<b class="data-title">Downloads</b>
								<p class="data-value" data-downloads>${downloads}</p>
							</li>
						</ul>
					</div>
				</a>
      </li>`;
      }
    )
    .join('');

  gallery.innerHTML = markup;
  initLightBox();
}

function initLightBox() {
  let galleryBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  galleryBox.refresh();

  galleryBox.on('error.simplelightbox', function (e) {
    console.log(e);
  });
}
