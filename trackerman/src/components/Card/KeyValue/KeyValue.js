import styled from "styled-components"
import editIcon from '../../../images/icons/edit.svg'
import Key from "../../Common/Key/Key"
import Value from "../../Common/Value/Value"

const KeyValueBox = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  font-size: 20px;
  align-items: center;

  &:nth-child(1n):not(:last-child) {
    margin-right: 30px;
  }
`

const BoxTargetValueAndEditIcon = styled.div`
  position: relative;
  transition: 0.1s ease-in;

  &:hover  {
    cursor: pointer;
    color: #d1d1d1;
  }

  &:hover > button {
    visibility: visible;
    opacity: 1;
  }
`

const TargetValue = styled(Value)``

const ButtonEditTargetPrice = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 0;
  width: 40px;
  height: 40px;
  visibility: hidden;
  opacity: 0;
  transition: 0.1s ease-in;
  cursor: pointer;
`

const EditIcon = styled.img`
  height: 100%;
  width: 100%;
`


function KeyValue({ data, type }) {
  const { key, value } = data;

  return (

    type === 'edit' ?
      <KeyValueBox>
        <Key>{key}</Key>

        <BoxTargetValueAndEditIcon>
          <TargetValue>{value}</TargetValue>

          <ButtonEditTargetPrice title="Редактировать целевую стоимость">
            <EditIcon src={editIcon} alt="Иконка редактирования" />
          </ButtonEditTargetPrice>
        </BoxTargetValueAndEditIcon>

      </KeyValueBox>

      :

      <KeyValueBox>
        <Key>{key}</Key>
        <Value>{value}</Value>
      </KeyValueBox>

  )
}

export default KeyValue