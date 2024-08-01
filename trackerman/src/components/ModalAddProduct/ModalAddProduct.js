import styled from "styled-components"
import close from "../../images/icons/close.svg"

const Modal = styled.dialog`
  position: relative;
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

const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const Title = styled.h3`
  margin: 0 0 50px 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  margin-bottom: 5px;
`

const Input = styled.input`
  height: 25px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &:nth-child(1n) {
    margin-bottom: 15px;
  }

  &:last-of-type {
    margin-bottom: 45px;
  }
`

const Submit = styled.button`
  width: 150px;
  height: 40px;
  font-size: 15px;
  align-self: center;
  cursor: pointer;
`



function ModalAddProduct() {

  function handleOnClick(e) {
    window.modalAddProduct.close()
  }

  function handleOnSubmit(e) {
    e.preventDefault()
  }


  return (
    <Modal id='modalAddProduct' onSubmit={handleOnSubmit}>

      <ButtonClose title="Закрыть" onClick={handleOnClick}>
        <IconClose src={close} />
      </ButtonClose>

      <CommonBox>
        <Title>Добавление нового товара</Title>

        <Form>
          <Label htmlFor="linkToProduct">Ссылка на товар</Label>
          <Input type="url" id="linkToProduct" />
        </Form>
        <Submit>Отправить</Submit>
      </CommonBox>
    </Modal>
  )
}

export default ModalAddProduct