import styled from "styled-components"
import deleteIcon from '../../../images/icons/delete.svg'

const ButtonDelete = styled.button`
  position: absolute;
  bottom: 15px;
  right: 20px;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

const DeleteIcon = styled.img`
  filter: invert(14%) sepia(95%) saturate(7428%) hue-rotate(353deg) brightness(97%) contrast(108%);
  opacity: 0.2;
  transition: 0.1s ease-in;

  &:hover {
    opacity: 1;
  }
`


function ButtonDeleteCard() {
  return (
    <ButtonDelete title="Удалить карточку">
      <DeleteIcon src={deleteIcon} alt="Иконка удаления"></DeleteIcon>
    </ButtonDelete>
  )
}

export default ButtonDeleteCard