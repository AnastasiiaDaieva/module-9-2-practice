import checkingClosedModal from "./checkingClosedModal.js";

import refs from "./refs.js";
const {
  ulAccess,
  modal,
  modalOverlay,
  modalContent,
  modalImage,
  closeModalButton,
} = refs;

export default function closeModalByWrapper(e) {
  if (!e.target.classList.contains("lightbox__image")) {
    closeModalByClick();
    checkingClosedModal();
  }
}
