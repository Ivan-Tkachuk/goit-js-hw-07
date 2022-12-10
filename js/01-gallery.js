import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const ListItemsMarkup = createListItemsMarkup(galleryItems);

function createListItemsMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </div>`
    )
    .join("");
}

gallery.innerHTML = ListItemsMarkup;

gallery.addEventListener("click", showImageOnClick);

function showImageOnClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const currentElement = event.target.closest(".gallery__image");
    const pictureUrl = currentElement.dataset.source;

    const instance = basicLightbox.create(`
    <img src=${pictureUrl} width="800" height="600">
    `);

    instance.show();

    gallery.addEventListener("keydown", onCloseModal);
    function onCloseModal(event) {
      if (event.code === "Escape") {
        instance.close();
      }
    }
  }
}

console.log(galleryItems);
