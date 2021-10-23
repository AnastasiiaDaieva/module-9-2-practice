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

export default function closeModalByKey(e) {
  if (e.code === "Escape") {
    closeModalByClick();
    checkingClosedModal();
  }
}
