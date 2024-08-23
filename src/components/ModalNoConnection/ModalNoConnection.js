import styled from "styled-components"
import Modal from "../Common/Modal/Modal"
import { useEffect } from "react"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-conent: center;
  align-items: center;
  font-size: 18px;
`
const ButtonUpdate = styled.button`
  width: 170px;
  height: 40px;
  cursor: pointer;
  margin-top: 50px;
  font-size: 16px;
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 50px;
`

const TextCheckStatus = styled.em`
  font-style: normal;
`

function ModalNoConnection() {

  useEffect(() => {
    window.modalNoConnection.showModal()
  }, [])

  function handleOnClick() {
    window.location.reload()
  }


  return (

    <Modal modalName='modalNoConnection' maxWidth="800px" withoutButtonClose>
      <Box>
        <Title>К сожалению, не удалось получить ответ от сервера.</Title>
        <p>Вероятнее всего: <strong>он не запущен либо у него возникла непредвиденная ошибка.</strong></p>
        <TextCheckStatus>Проверьте статус сервера 😉</TextCheckStatus>

        <ButtonUpdate onClick={handleOnClick}>Я всё проверил</ButtonUpdate>
      </Box>
    </Modal>

  )
}

export default ModalNoConnection