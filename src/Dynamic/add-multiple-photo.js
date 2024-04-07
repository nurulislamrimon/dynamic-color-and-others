const productPhotosContainer = document.querySelector(
  "div#product-photos-container"
);

const handleFiles = (files) => {
  if (files.length) {
    for (let i = 0; i < files.length; i++) {
      const newPhoto = document.createElement("img");
      newPhoto.src = URL.createObjectURL(files[0]);

      productPhotosContainer.insertBefore(
        newPhoto,
        productPhotosContainer.lastChild.previousSibling
      );
    }
  }
};
