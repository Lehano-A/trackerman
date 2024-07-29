import styled from "styled-components";
import addIcon from "../../images/icons/add.svg"

const Button = styled.button`
  width: 40px;
  height: 40px;
`
const AddIcon = styled.img`
  transition: 0.1s ease-in;

  &:hover {
    cursor: pointer;
    filter: invert(83%) sepia(0%) saturate(2469%) hue-rotate(38deg) brightness(90%) contrast(86%);
  }
`

function ButtonAddProduct() {

  function handleOnClick() {
    window.modalAddProduct.showModal()
  }

  return (
    <Button onClick={handleOnClick}>
      <AddIcon src={addIcon} />
    </Button>
  )
}

export default ButtonAddProduct;
