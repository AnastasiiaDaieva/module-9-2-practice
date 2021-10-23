import refs from "./refs.js";
const {
  ulAccess,
  modal,
  modalOverlay,
  modalContent,
  modalImage,
  closeModalButton,
} = refs;

import closeModalByClick from "./closeModalByClick.js";
import closeModalByKey from "./closeModalByKey.js";
import closeModalByWrapper from "./closeModalByWrapper.js";

export default function checkingClosedModal() {
  if (!modal.classList.contains("is-open")) {
    closeModalButton.addEventListener("click", closeModalByClick);
    window.removeEventListener("keydown", closeModalByKey);
    modal.removeEventListener("click", closeModalByWrapper);
  }
}
