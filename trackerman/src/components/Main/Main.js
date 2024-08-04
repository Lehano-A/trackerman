import styled from "styled-components"
import ButtonAddProduct from "../ButtonAddProduct/ButtonAddProduct"
import ModalAddProduct from "../ModalAddProduct/ModalAddProduct"
import Cards from "../Cards/Cards"
import ModalDeleteCard from "../Card/ModalDeleteCard/ModalDeleteCard"
import { useSelector } from "react-redux"

const Box = styled.main`
  margin: 0 30px;
`

function Main() {

  const isVisibleModalDeleteCard = useSelector((state) => state.modalDeleteCard.isVisible)

  return (
    <Box>
      <ButtonAddProduct />
      <ModalAddProduct />

      {isVisibleModalDeleteCard && <ModalDeleteCard />}

      <Cards />
    </Box>
  )

}

export default Main