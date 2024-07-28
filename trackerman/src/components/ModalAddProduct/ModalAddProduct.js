import styled from "styled-components"

const Modal = styled.dialog`
  max-width: 650px;
  width: 100%;
  height: 300px;
  z-index: 99999;
  border: none;

  &::backdrop {
    background: rgba(0, 0, 0, 0.3);
    border: none;
  }

  &:focus {
    border: none;
  }
`

function ModalAddProduct() {

  function handleOnClick(e) {
    const rect = e.target.getBoundingClientRect();
    const isClickIntoDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);

    if (!isClickIntoDialog) {
      window.modalAddProduct.close()
    }
  }

  return (
    <Modal id='modalAddProduct' onClick={handleOnClick}></Modal>
  )
}

export default ModalAddProduct