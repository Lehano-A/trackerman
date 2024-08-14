import styled from "styled-components"
import Modal from "../Common/Modal/Modal"
import api from "../../api/api"
import { useState } from "react"
import { CircularProgress } from "@mui/material"
import { useDispatch } from "react-redux"
import { hideModalAddProduct } from "../../redux/slices/modalAddProductSlice"

const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  min-height: 250px;
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

const BoxLoader = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Loader = styled(CircularProgress)`
 filter: invert(96%) sepia(0%) saturate(0%) hue-rotate(147deg) brightness(83%) contrast(89%);
`


function ModalAddProduct() {

  const dispatch = useDispatch()

  const [urlNewProduct, setUrlNewProduct] = useState('')
  const [isPressedSubmit, setIsPressedSubmit] = useState(false)

  function handleOnSubmit(e) {
    e.preventDefault()
    setIsPressedSubmit(true)

    api.addProduct(urlNewProduct)
      .then((res) => console.log('Ответ от сервера: ', res))
  }

  function handleOnChange(e) {
    setUrlNewProduct(e.target.value)
  }

  function runCallbackCloseModal() {
    dispatch(hideModalAddProduct())
  }

  return (
    <Modal
      modalName='modalAddProduct'
      callbackCloseModal={runCallbackCloseModal}
      handleOnSubmit={handleOnSubmit}
    >
      <CommonBox>
        {isPressedSubmit ? <BoxLoader><Loader /></BoxLoader>

          :

          <>
            <Title>Добавление нового товара</Title>

            <Form>
              <Label htmlFor="linkToProduct">Ссылка на товар</Label>
              <Input onChange={handleOnChange} type="url" id="linkToProduct" required />
              <Submit type="submit">Отправить</Submit>
            </Form>

          </>
        }
      </CommonBox>
    </Modal>
  )
}

export default ModalAddProduct