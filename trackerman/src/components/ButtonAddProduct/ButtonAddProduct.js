import styled from "styled-components";
import addIcon from "../../images/icons/add.svg"

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: transparent;
`
const AddIcon = styled.img`
  transition: 0.1s ease-in;
  height: 100%;
  width: 100%;

  &:hover {
    cursor: pointer;
    filter: invert(70%) sepia(0%) saturate(1441%) hue-rotate(193deg) brightness(88%) contrast(93%);
  }
`

function ButtonAddProduct() {

  function handleOnClick() {
    window.modalAddProduct.showModal()
  }

  return (
    <Button onClick={handleOnClick} title="Добавить новый товар">
      <AddIcon src={addIcon} alt="Иконка 'Добавить'" />
    </Button>
  )
}

export default ButtonAddProduct;
