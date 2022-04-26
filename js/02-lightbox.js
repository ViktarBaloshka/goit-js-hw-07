import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createListImages(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createListImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li> 
    <a class="gallery__item" href="${original}">
        <img
            style="display:block"
            class="gallery__image"
            src="${preview}" 
            alt="${description}"
        />
    </a>
  </li>
    `;
    })
    .join('');
}
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
