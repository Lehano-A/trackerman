import styled from "styled-components";
import addIcon from "../../../images/icons/add.svg"

const AddIcon = styled.img`
  width: 40px;
  height: 40px;
  transition: 0.1s ease-in;

  &:hover {
    cursor: pointer;
    filter: invert(83%) sepia(0%) saturate(2469%) hue-rotate(38deg) brightness(90%) contrast(86%);
  }
`

function AddProduct() {
  return (<AddIcon src={addIcon}></AddIcon>)
}

export default AddProduct;
