import styled from "styled-components"
import Modal from "../Common/Modal/Modal"
import api from "../../api/api"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { disableLoadingIndicator, enableLoadingIndicator, hideModalAddProduct } from "../../redux/slices/modalAddProductSlice"
import Form from "../Common/Form/Form"
import Submit from "../Common/Form/Submit/Submit"
import PreviewNewProduct from "./PreviewNewProduct/PreviewNewProduct"
import Preloader from "../Preloader/Preloader"
import InputField from "../../styled/StyledInputField"
import Label from "../../styled/StyledLabel"

const CommonBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 250px;
`

const Title = styled.h2`
  margin: 0 0 50px 0;
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

            <Preloader />

            : !isActiveLoadingIndicator && !dataNewProduct ?

              <>
                <Title>Добавление нового товара</Title>

                <Form handleOnSubmit={handleOnSubmit}>
                  <Label htmlFor="inputLinkToProduct">Ссылка на товар</Label>
                  <InputField
                    id="inputLinkToProduct"
                    minLength={1}
                    type="url"
                    onChange={handleOnChange}
                    required={true}
                  />
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