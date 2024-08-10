import styled from "styled-components"
import ButtonAddProduct from "../ButtonAddProduct/ButtonAddProduct"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
function MessageAddFirstProduct() {
  return (
    <Box id="messageAddFirstProduct">
      <h2>Добавьте свой первый товар для отслеживания</h2>
      <ButtonAddProduct />
    </Box>
  )
}

export default MessageAddFirstProduct