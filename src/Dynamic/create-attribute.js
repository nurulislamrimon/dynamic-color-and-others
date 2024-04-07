// ===============================================
// select attributes==============================
// ===============================================

const createAttributeInput = document.querySelector("input#create-attribute");
// colors
// color variant
const colorVariantMainSection = document.querySelector(
  "section#color-variant-section"
);
const inputColorsContainer = document.querySelector(
  "div#colors-input-container"
);
const inputColorsSelect = document.querySelector("input#add-new-color");
// otherAttributes============
// otherAttribute variant
const otherAttributeVariantMainSection = document.querySelector(
  "section#other-attribute-variant-section"
);
const inputOtherAttributesContainer = document.querySelector(
  "label#other-attributes-input-container"
);
const inputOtherAttributesSelect = document.querySelector(
  "input#add-new-other-attribute"
);

// add product color or others attribute
const addAttribute = (e) => {
  const fieldValue = e.target.value;

  if (fieldValue.toLowerCase() === "color") {
    colorVariantMainSection.classList.remove("hidden");
    otherAttributeVariantMainSection.classList.add("hidden");
  } else {
    otherAttributeVariantMainSection.classList.remove("hidden");
    colorVariantMainSection.classList.add("hidden");
  }
};

createAttributeInput.addEventListener("keyup", addAttribute);

// ===============================================
// select colors==================================
// ===============================================

// remove color variant
const removeColors = (element) => {
  element.remove();
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
  // Create and append new element
  const newElement = document.createElement("span");
  newElement.innerHTML = value;
  newElement.classList.add(
    "inline-block",
    "px-2",
    "m-1",
    "bg-gray-300",
    "cursor-pointer"
  );
  newElement.addEventListener("click", () => {
    removeColors(newElement, colorName);
  });
  inputColorsContainer.appendChild(newElement);
};

inputColorsSelect.addEventListener("change", addColorsInInput);

// ===============================================
// select otherAttributes==================================
// ===============================================

// remove otherAttribute variant
const removeOtherAttributes = (element) => {
  element.remove();
};

const addOtherAttributesInInput = (e) => {
  const otherAttributeName = e.target.value;
  const value = `<span class="flex items-center gap-2"> ${otherAttributeName} <span class="close">&times;</span></span>`;
  // Check if the value already exists in any child node
  const isDuplicate = Array.from(inputOtherAttributesContainer.childNodes).some(
    (el) => {
      const gap = el.innerText.split("\n")[1];
      return el.innerText === otherAttributeName.concat("\n" + gap);
    }
  );
  // If it's a duplicate, return without appending
  if (isDuplicate) {
    return;
  }
  // clear the input field
  inputOtherAttributesSelect.value = "";
  // Create and append new element
  const newElement = document.createElement("span");
  newElement.innerHTML = value;
  newElement.classList.add(
    "inline-block",
    "px-2",
    "m-1",
    "bg-gray-300",
    "cursor-pointer"
  );
  newElement.addEventListener("click", () => {
    removeOtherAttributes(newElement, otherAttributeName);
  });
  inputOtherAttributesContainer.appendChild(newElement);
};

inputOtherAttributesSelect.addEventListener(
  "change",
  addOtherAttributesInInput
);
