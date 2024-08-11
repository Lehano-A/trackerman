import styled from "styled-components"
import close from "../../../images/icons/close.svg"

const Dialog = styled.dialog`
  position: fixed;
  max-width: 650px;
  width: 100%;
  z-index: 99999;
  border: none;
  padding: 25px;

  &::backdrop {
    background: rgba(0, 0, 0, 0.3);
    border: none;
  }

  &:focus {
    border: none;
  }
`


const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
  background-color: transparent;
`

const IconClose = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.1s ease-in;

  &:hover {
    filter: invert(70%) sepia(0%) saturate(1441%) hue-rotate(193deg) brightness(88%) contrast(93%);
  }
`


function Modal({ children, callbackCloseModal, modalName, handleOnSubmit }) {


  function handleClose() {
    callbackCloseModal && callbackCloseModal()
    window[modalName].close()
  }


  return (
    <Dialog id={modalName} onSubmit={handleOnSubmit}>

      <ButtonClose title="Закрыть" onClick={handleClose}>
        <IconClose src={close} />
      </ButtonClose>

      {children}
    </Dialog>
  )
}

export default Modal