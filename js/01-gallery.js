import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createListImages(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onImageClick);

function createListImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                style="display:block"
                class="gallery__image"
                data-src="${original}" 
                src="${preview}" 
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join('');
}

function onImageClick(event) {
  if (!event.target.classList.contains('.gallery__image')) {
    return;
  }
  event.preventDefault();
  createModal(event.target.dataset.source);
}

function createModal(src) {
  let instance = basicLightbox.create(
    `<div class="modal">
        <img src=${src}</img>
    </div>`,
    // {
    //   onShow: instance => {
    //     instance.show();
    //   },
    // },
    // {
    //   onClose: instance => {
    //     instance.close();
    //   },
    // },
  );
  instance.show();
}
