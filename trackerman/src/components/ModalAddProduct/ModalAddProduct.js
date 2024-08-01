import styled from "styled-components"

const Modal = styled.dialog`
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
    e.preventDefault()

    const rect = e.target.getBoundingClientRect();
    const isClickIntoDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);

    if (!isClickIntoDialog) {
      window.modalAddProduct.close()
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault()
  }

  return (
    <Modal id='modalAddProduct' onMouseUp={handleOnClick} onSubmit={handleOnSubmit}>
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