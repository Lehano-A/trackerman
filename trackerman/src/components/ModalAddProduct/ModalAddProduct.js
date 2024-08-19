import styled from "styled-components"
import Modal from "../Common/Modal/Modal"
import api from "../../api/api"
import { useState } from "react"
import { CircularProgress } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { disableLoadingIndicator, enableLoadingIndicator, hideModalAddProduct } from "../../redux/slices/modalAddProductSlice"
import Form from "../Common/Form/Form"
import Label from "../Common/Form/Label/Label"
import Input from "../Common/Form/Input/Input"
import Submit from "../Common/Form/Submit/Submit"
import PreviewNewProduct from "./PreviewNewProduct/PreviewNewProduct"

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
  const [dataNewProduct, setDataNewProduct] = useState(null)
  const isActiveLoadingIndicator = useSelector((state) => state.modalAddProduct.isActiveLoadingIndicator)


  function handleOnSubmit(e) {
    e.preventDefault()

    dispatch(enableLoadingIndicator())

    api.sendProductUrl(urlNewProduct)
      .then((res) => setDataNewProduct(res))
      .catch((err) => console.log(err))
      .finally(() => dispatch(disableLoadingIndicator()))
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
    >
      <CommonBox>
        {
          isActiveLoadingIndicator ?

            <BoxLoader><Loader /></BoxLoader>

            : !isActiveLoadingIndicator && !dataNewProduct ?

              <>
                <Title>Добавление нового товара</Title>

                <Form handleOnSubmit={handleOnSubmit}>
                  <Label options={{ htmlFor: 'inputLinkToProduct' }}>Ссылка на товар</Label>
                  <Input options={{
                    id: 'inputLinkToProduct',
                    minLength: 1,
                    type: 'url',
                    handleOnChange: handleOnChange,
                    required: true
                  }} />
                  <Submit type="submit">Отправить</Submit>
                </Form>
              </>

              :

              <PreviewNewProduct data={dataNewProduct} />
        }
      </CommonBox>
    </Modal>
  )
}

export default ModalAddProduct