import styled from "styled-components"
import ButtonAddProduct from "../ButtonAddProduct/ButtonAddProduct"
import ModalAddProduct from "../ModalAddProduct/ModalAddProduct"
import Cards from "../Cards/Cards"
import ModalDeleteCard from "../Card/ModalDeleteCard/ModalDeleteCard"
import { useDispatch, useSelector } from "react-redux"
import MessageAddFirstProduct from "../MessageAddFirstProduct/MessageAddFirstProduct"
import Preloader from "../Preloader/Preloader"
import { useEffect } from "react"
import { getProductList } from "../../api/getProductList/getProductList"
import { saveDataProducts } from "../../redux/slices/productsSlice"
import ModalNoConnection from "../ModalNoConnection/ModalNoConnection"
import { enableLoadingIndicator } from "../../redux/slices/mainBlockSlice"

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

  const dispatch = useDispatch()


  const isVisibleModalAddProduct = useSelector((state) => state.modalAddProduct.isVisible)
  const isVisibleModalDeleteCard = useSelector((state) => state.modalDeleteCard.isVisible)
  const productsData = useSelector((state) => state.products.data)
  const isActiveLoadingIndicator = useSelector((state) => state.mainBlock.isActiveLoadingIndicator)
  const connectionStatus = useSelector((state) => state.server.connectionStatus)

  useEffect(() => {
    dispatch(enableLoadingIndicator())
    getProductList(dispatch, saveDataProducts)
  }, [])

  return (
    <>
      {isActiveLoadingIndicator && <Preloader />}

      {connectionStatus === false && <ModalNoConnection />}

      {connectionStatus &&

        <Box>
          {
            productsData?.length > 0 &&
            <BoxButtonAddProduct>
              <ButtonAddProduct />
            </BoxButtonAddProduct>
          }

          {isVisibleModalAddProduct && <ModalAddProduct />}
          {isVisibleModalDeleteCard && <ModalDeleteCard />}

          {productsData?.length === 0 ? <MessageAddFirstProduct /> : <Cards />}
        </Box>
      }
    </>
  )

}

export default Main