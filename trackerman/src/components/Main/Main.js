import styled from "styled-components"
import ButtonAddProduct from "../ButtonAddProduct/ButtonAddProduct"
import ModalAddProduct from "../ModalAddProduct/ModalAddProduct"
import Cards from "../Cards/Cards"
import ModalDeleteCard from "../Card/ModalDeleteCard/ModalDeleteCard"
import { useSelector } from "react-redux"
import MessageAddFirstProduct from "../MessageAddFirstProduct/MessageAddFirstProduct"

const Box = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  & > #messageAddFirstProduct {
    margin-top: 100px;
  }
`

const BoxButtonAddProduct = styled.div`
  position: fixed;
  bottom: 30px;
  left: 25px;
`


function Main() {

  const isVisibleModalDeleteCard = useSelector((state) => state.modalDeleteCard.isVisible)
  const productsData = useSelector((state) => state.products.data)

  return (
    <Box>
      {
        productsData?.length > 0 &&
        <BoxButtonAddProduct>
          <ButtonAddProduct />
        </BoxButtonAddProduct>
      }

      <ModalAddProduct />

      {isVisibleModalDeleteCard && <ModalDeleteCard />}

      {productsData?.length === 0 ? <MessageAddFirstProduct /> : <Cards />}
    </Box>
  )

}

export default Main