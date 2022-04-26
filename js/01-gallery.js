import { galleryItems } from './gallery-items.js';
// Change code below this line
let instance;
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createListImages(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onClickToImage);

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

function onClickToImage(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  createModalForm(event.target.getAttribute('data-src'));
}

function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}

function createModalForm(src) {
  instance = basicLightbox.create(
    `<div>
        <img src="${src}"/>
    </div>`,
    {
      onShow: instance => {
        addListener('keydown', onEscClick);
      },
    },
    {
      onClose: instance => {
        removeListener('keydown', onEscClick);
      },
    },
  );
  instance.show();
}
console.log(galleryItems);
