import styled from "styled-components"
import Modal from "../Common/Modal/Modal"
import api from "../../api/api"
import { useState } from "react"

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

  const [urlNewProduct, setUrlNewProduct] = useState('')

  function handleOnSubmit(e) {
    e.preventDefault()

    api.addProduct(urlNewProduct)
      .then((res) => console.log('Ответ от сервера: ', res))
  }

  function handleOnChange(e) {
    setUrlNewProduct(e.target.value)
  }

  return (
    <Modal modalName='modalAddProduct' handleOnSubmit={handleOnSubmit}>
      <CommonBox>
        <Title>Добавление нового товара</Title>

        <Form>
          <Label htmlFor="linkToProduct">Ссылка на товар</Label>
          <Input onChange={handleOnChange} type="url" id="linkToProduct" />
        </Form>
        <Submit type="submit">Отправить</Submit>
      </CommonBox>
    </Modal>
  )
}

export default ModalAddProduct