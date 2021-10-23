// ВСЕ ИМПОРТЫ
import photoArray from "../db/photo.js";

// import createItemByString from "./createItemByString.js";

import createItemAsElement from "./createItemAsElement.js";
// import closeModalByClick from "./closeModalByClick.js";
// import closeModalByKey from "./closeModalByKey.js";
// import closeModalByWrapper from "./closeModalByWrapper.js";

// ВСЕ ДОСТУПЫ
import refs from "./refs.js";
const {
  ulAccess,
  modal,
  modalOverlay,
  modalContent,
  modalImage,
  closeModalButton,
} = refs;
// ВСЕ СЛУШАТЕЛИ
ulAccess.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    modal.classList.add("is-open");
    modalImage.src = e.target.src;
  }
  closeModal();
});

// ВСЕ ФУНКЦИИ

function closeModal() {
  function closeModalByClick() {
    modal.classList.remove("is-open");
    // checkingClosedModal();
  }

  // closeModalByClick();
  closeModalButton.addEventListener("click", closeModalByClick);

  function closeModalByKey(e) {
    if (e.code === "Escape") {
      closeModalByClick();
      // checkingClosedModal();
    }
  }
  // closeModalByKey(e);
  window.addEventListener("keydown", closeModalByKey);

  function closeModalByWrapper(e) {
    if (!e.target.classList.contains("lightbox__image")) {
      closeModalByClick();
      // checkingClosedModal();
    }
  }
  // closeModalByWrapper(e);
  modal.addEventListener("click", closeModalByWrapper);
}
// function checkingClosedModal() {
//   if (!modal.classList.contains("is-open")) {
//     closeModalButton.addEventListener("click", closeModalByClick);
//     window.removeEventListener("keydown", closeModalByKey);
//     modal.removeEventListener("click", closeModalByWrapper);
//   }
// }
//
const result = photoArray.map((photoObject) => {
  //   console.log(photoObject);
  // деструктуризация итерируемого объекта перед вызовом функции создания разметки
  const {
    title: mainTitle,
    image,
    description,
    category,
    issue,
    author: { name, country, city },
  } = photoObject;
  // вызов функции создания разметки

  // creation by string

  //   const item = createItemByString(
  //     mainTitle,
  //     image,
  //     description,
  //     category,
  //     issue,
  //     name,
  //     country,
  //     city,
  //   );
  //   //   console.log(item);
  //   return item;
  // });

  // creation as element

  const item = createItemAsElement(
    mainTitle,
    image,
    description,
    category,
    issue,
    name,
    country,
    city,
  );
  //   console.log(item);
  return item;
});

// const addResult and ulAccess are needed only for creation by string

// const addResult = result.join("");

// ulAccess.insertAdjacentHTML("beforeend", addResult);

// what is needed for creation as element:

ulAccess.append(...result);
