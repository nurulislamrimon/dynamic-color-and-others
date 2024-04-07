// ===============================================
// select attributes==============================
// ===============================================
// attribute
const attributeContainer = document.querySelector("label#attribute-container");
const attributeInput = document.querySelector("select#attribute");
// colors
const inputColorsContainer = document.querySelector(
  "label#colors-input-container"
);
const inputColorsSelect = document.querySelector("select#colors");
// color variant
const colorVariantMainSection = document.querySelector(
  "section#color-variant-section"
);
const colorVariantsContainer = document.querySelector(
  "div#color-variation-container"
);

// Storages
const inputStoragesContainer = document.querySelector(
  "label#storages-input-container"
);
const inputStoragesSelect = document.querySelector("select#storages");
// Storage variant
const storageVariantMainSection = document.querySelector(
  "section#storage-variant-section"
);
const storageVariantsContainer = document.querySelector(
  "div#storage-variation-container"
);

// remove an attribute
const removeAttribute = (element) => {
  // Remove the color variant section if the attribute is Color
  if (element.innerText.split(" ")[0].trim() === "Color") {
    colorVariantMainSection.classList.add("hidden");
  }
  if (element.innerText.split(" ")[0].trim() === "Storage") {
    storageVariantMainSection.classList.add("hidden");
  }
  element.remove();
  attributeInput.value = "";
};

// add product color or others attribute
const addAttribute = (e) => {
  const fieldValue = e.target.value;
  const value = `${fieldValue} <span class="close">&times;</span>`;
  // Check if the value already exists in any child node
  const isDuplicate = Array.from(attributeContainer.childNodes).some((el) => {
    return el.innerText.split(" ")[0].trim() === value.split(" ")[0].trim();
  });
  // If it's a duplicate, return without appending
  if (isDuplicate) {
    return;
  }
  if (fieldValue === "Color") {
    colorVariantMainSection.classList.remove("hidden");
  }

  if (fieldValue === "Storage") {
    storageVariantMainSection.classList.remove("hidden");
  }

  // Create and append new element
  const newElement = document.createElement("span");
  newElement.innerHTML = value;
  newElement.classList.add("inline-block", "px-2", "m-1", "bg-gray-300");
  newElement.addEventListener("click", () => removeAttribute(newElement));
  attributeContainer.appendChild(newElement);
};

attributeInput.addEventListener("change", addAttribute);

// ===============================================
// select colors==================================
// ===============================================

// add new color variant
const addColorVariant = (color, parent) => {
  const newColorVariantMarkup = `<div class="col-span-4">
      <h5 class="font-semibold">Color Variant</h5>
      <div class="flex gap-2">
        <label for="variant-photo" class="border p-1">
          🖼️
          <input
            type="file"
            id="variant-photo"
            name="variant-photo"
            class="hidden"
          />
        </label>

        <div class="flex items-center gap-2 border w-full justify-center">
          <span
            class="inline-block h-3 w-3 rounded-full"
            style="background-color: ${color}"
          ></span>
          <span class="flex items-center gap-2">${color}</span>
        </div>
      </div>
    </div>

    <div class="col-span-4">
      <h5 class="font-semibold">Color Price</h5>
      <input type="number" placeholder="$150" class="border w-full p-1" />
    </div>

    <div class="col-span-4">
      <h5 class="font-semibold">Color Stock</h5>
      <input type="number" placeholder="500" class="border w-full p-1" />
    </div>`;
  const newColorVariant = document.createElement("div");
  newColorVariant.classList.add("grid", "grid-cols-12", "w-full", "gap-5");
  //   add an id to the new color variant
  newColorVariant.id = `color-variant-${color}-container`;
  newColorVariant.innerHTML = newColorVariantMarkup;
  parent.appendChild(newColorVariant);
};

// remove color variant
const removeColors = (element, color) => {
  element.remove();
  const colorVariantItem = document.querySelector(
    `#color-variant-${color}-container`
  );
  colorVariantsContainer.removeChild(colorVariantItem);
  inputColorsSelect.value = "";
};

const addColorsInInput = (e) => {
  const colorName = e.target.value;
  const value = `<span class="flex items-center gap-2"><span class="inline-block h-3 w-3 rounded-full" style="background-color:${colorName};"></span> ${colorName} <span class="close">&times;</span></span>`;
  // Check if the value already exists in any child node
  const isDuplicate = Array.from(inputColorsContainer.childNodes).some((el) => {
    const gap = el.innerText.split("\n")[1];
    return el.innerText === colorName.concat("\n" + gap);
  });
  // If it's a duplicate, return without appending
  if (isDuplicate) {
    return;
  }
  // If the value is Color, append a color variant section
  addColorVariant(colorName, colorVariantsContainer);
  // Create and append new element
  const newElement = document.createElement("span");
  newElement.innerHTML = value;
  newElement.classList.add("inline-block", "px-2", "m-1", "bg-gray-300");
  newElement.addEventListener("click", () => {
    removeColors(newElement, colorName);
  });
  inputColorsContainer.appendChild(newElement);
};

inputColorsSelect.addEventListener("change", addColorsInInput);

// ===============================================
// select Storages================================
// ===============================================

// add new Storage variant
const addStorageVariant = (storage, parent) => {
  const newStorageVariantMarkup = `<div class="col-span-4">
      <h5 class="font-semibold">Storage Price</h5>
      <p class="border p-1">${storage}</p>
    </div>

    <div class="col-span-4">
      <h5 class="font-semibold">Storage Price</h5>
      <input type="number" placeholder="$150" class="border w-full p-1" />
    </div>

    <div class="col-span-4">
      <h5 class="font-semibold">Storage Stock</h5>
      <input type="number" placeholder="500" class="border w-full p-1" />
    </div>`;
  const newStorageVariant = document.createElement("div");
  newStorageVariant.classList.add("grid", "grid-cols-12", "w-full", "gap-5");
  //   add an id to the new Storage variant
  newStorageVariant.id = `storage-variant-${storage}-container`;
  newStorageVariant.innerHTML = newStorageVariantMarkup;
  parent.appendChild(newStorageVariant);
};

// remove Storage variant
const removeStorages = (element, storage) => {
  element.remove();
  const storageVariantItem = document.querySelector(
    `#storage-variant-${storage}-container`
  );
  // Check if storageVariantItem exists before attempting to remove it
  if (storageVariantItem) {
    storageVariantsContainer.removeChild(storageVariantItem);
  }

  inputStoragesSelect.value = "";
};
// add storage
const addStoragesInInput = (e) => {
  const storageName = e.target.value;
  const value = `<span class="flex items-center gap-2">${storageName}<span class="close">&times;</span></span>`;
  // Check if the value already exists in any child node
  const isDuplicate = Array.from(inputStoragesContainer.childNodes).some(
    (el) => {
      const gap = el.innerText.split("\n")[1];
      return el.innerText === storageName.concat("\n" + gap);
    }
  );
  // If it's a duplicate, return without appending
  if (isDuplicate) {
    return;
  }
  // If the value is Storage, append a Storage variant section
  addStorageVariant(storageName, storageVariantsContainer);
  // Create and append new element
  const newElement = document.createElement("span");
  newElement.innerHTML = value;
  newElement.classList.add("inline-block", "px-2", "m-1", "bg-gray-300");
  newElement.addEventListener("click", () => {
    removeStorages(newElement, storageName);
  });
  inputStoragesContainer.appendChild(newElement);
};

inputStoragesSelect.addEventListener("change", addStoragesInInput);
