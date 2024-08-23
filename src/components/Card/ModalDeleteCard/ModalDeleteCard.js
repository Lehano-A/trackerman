import styled from "styled-components"
import Modal from "../../Common/Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { disableLoadingIndicator, enableLoadingIndicator, hideModal } from "../../../redux/slices/modalDeleteCardSlice"
import { useEffect } from "react"
import { saveDataProducts } from "../../../redux/slices/productsSlice"
import api from "../../../api/api"
import Preloader from "../../Preloader/Preloader"

const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const Title = styled.h2`
  margin: 0 0 20px 0;
`

const ButtonBox = styled.div`
  margin-top: 40px;
`

const Button = styled.button`
  width: 80px;
  height: 35px;
  font-size: 14px;
  border: 1px solid #a4a4a4;
  border-radius: 3px;
  cursor: pointer;

  &:nth-child(1n):not(:last-child) {
    margin-right: 40px;
  }

  &:hover {
    background-color: #e5e5e5;
  }
`


function ModalDeleteCard() {

  const dispatch = useDispatch()

  const dataProducts = useSelector((state) => state.products.data)
  const dataDeletingCard = useSelector((state) => state.modalDeleteCard.dataDeletingCard)
  const isVisibleModal = useSelector((state) => state.modalDeleteCard.isVisible)
  const isActiveLoadingIndicator = useSelector((state) => state.modalDeleteCard.isActiveLoadingIndicator)

  useEffect(() => {
    if (isVisibleModal) {
      window.modalDeleteCard.showModal()
    }
  }, [isVisibleModal])



  function handleCloseModal() {
    dispatch(hideModal())
  }


  function handleDeleteCard() {
    const filteredCards = dataProducts.filter((item) => (item.id !== dataDeletingCard.id))

    dispatch(enableLoadingIndicator())

    api.deleteProduct(dataDeletingCard.id)
      .then(() => {
        dispatch(saveDataProducts(filteredCards))
        dispatch(hideModal())
      })
      .catch((err) => console.log('Ошибка: ', err))
      .finally(() => dispatch(disableLoadingIndicator()))
  }



  return (
    <>
      {
        isActiveLoadingIndicator ?

          <Preloader />

          :

          <Modal modalName="modalDeleteCard" callbackCloseModal={handleCloseModal}>
            <CommonBox>
              <Title>Вы действительно хотите удалить карточку?</Title>
              <span>{dataDeletingCard.name}</span>

              <ButtonBox>
                <Button onClick={handleDeleteCard}>Да</Button>
                <Button onClick={handleCloseModal}>Отмена</Button>
              </ButtonBox>
            </CommonBox>
          </Modal>
      }
    </>
  )
}

export default ModalDeleteCard