import styled from "styled-components"
import { useState } from "react"
import ImageProduct from "../../Card/ImageProduct/ImageProduct"
import KeyValue from "../../Card/KeyValue/KeyValue"
import NameLink from "../../Card/NameLink/NameLink"
import Form from "../../Common/Form/Form"
import Submit from "../../Common/Form/Submit/Submit"
import Input from "../../Common/Form/Input/Input"
import Label from "../../Common/Form/Label/Label"
import api from "../../../api/api"
import { useDispatch } from "react-redux"
import { disableLoadingIndicator, enableLoadingIndicator, hideModalAddProduct } from "../../../redux/slices/modalAddProductSlice"
import { saveDataProducts } from "../../../redux/slices/productsSlice"
import { getProductList } from "../../../api/getProductList/getProductList"

const BoxImageAndPrice = styled.div`
  display: flex;
  margin-bottom: 50px;

  & > img {
    margin-right: 80px;
  }
`

function PreviewNewProduct({ data }) {
  const { name, startPriceWithCard, productUrl, imageUrl } = data

  const dispatch = useDispatch()
  const [targetPriceWithCard, setTargetPriceWithCard] = useState(null)


  function handleOnSubmit(e) {
    e.preventDefault()
    dispatch(enableLoadingIndicator())

    const dataProductForServer = {
      name,
      imageUrl,
      productUrl,
      price: {
        withCard: {
          start: startPriceWithCard,
          current: startPriceWithCard,
          target: targetPriceWithCard,
        }
      },
    }

    api.addNewProduct(dataProductForServer)
      .then(() => getProductList(dispatch, saveDataProducts))
      .then(() => dispatch(hideModalAddProduct()))
      .catch((err) => console.log('Ошибка: ', err))
      .finally(() => dispatch(disableLoadingIndicator()))
  }


  function handleOnChange(e) {
    setTargetPriceWithCard(e.target.value)
  }


  return (
    <>
      <NameLink link={productUrl}>{name}</NameLink>

      <BoxImageAndPrice>
        <ImageProduct imageUrl={imageUrl} />
        <KeyValue data={{ key: 'Текущая', value: startPriceWithCard }} />
      </BoxImageAndPrice>

      <Form handleOnSubmit={handleOnSubmit}>
        <Label options={{ htmlFor: 'inputTargetPrice' }}>Цена отслеживания</Label>
        <Input options={{
          id: 'inputTargetPrice',
          minLength: 1,
          type: 'number',
          handleOnChange: handleOnChange,
          required: true
        }} />
        <Submit>Отправить</Submit>
      </Form>
    </>
  )
}

export default PreviewNewProduct