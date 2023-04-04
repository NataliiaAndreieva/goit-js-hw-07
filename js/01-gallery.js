import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener('click', onGalleryClick);

(function () {
    const itemsMarkup = galleryItems
      .map(
        ({ preview, original, description }) =>
          `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
      )
      .join("");
    gallery.insertAdjacentHTML("beforeend", itemsMarkup);
    
})();


function onGalleryClick(evt) {
  evt.preventDefault();
  // if (!evt.target.classList.contains("gallery__item")) {
  //     return;
  // }
  if (!(evt.target.tagName === "IMG")) {
    return;
  }

  const itemUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
 <img src="${itemUrl}" width="1280" height="auto"/>
 `,
  {
      onShow: (instance) => {
          window.addEventListener('keydown', onEscKeyPress)
      },
      onClose: (instance) => {
          window.addEventListener('keydown', onEscKeyPress)
      }
  }
  );
    
    instance.show();
    
    function onEscKeyPress(evt) {
        if (!(evt.code === 'Escape'))
            return;
        instance.close();
    }

}







// function createGalleryItemsMarkup(galleryItems) {
  
//   const itemsMarkup = galleryItems.map(({ preview, original, description }) => {
//     return
//     `<li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </li>`;
//   });
//     return itemsMarkup;
// }




