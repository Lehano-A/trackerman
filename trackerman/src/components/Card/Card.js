import { styled } from 'styled-components'
import { dataCards } from "../../constants"
import editIcon from '../../images/icons/edit.svg'
import deleteIcon from '../../images/icons/delete.svg'

const CommonBox = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  padding: 30px;
`

const SequenceNumber = styled.span`
  position: absolute;
  top: 5px;
  left: 10px;
  color: #d0cecf;
`

const ButtonDeleteCard = styled.button`
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

const ImageAndDataBox = styled.div`
  display: flex;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 40px;
`

const NameProduct = styled.h2`
  display: inline-block;
  font-size: 22px;
  margin: 0 0 25px 0;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
`

const DataBox = styled.dl`
  display: flex;
  max-width: ${props => props.$maxWidth || '500px'};
  width: 100%;
  margin: 0;
`

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

const DateAdditionBox = styled.div`
  display: flex;
  justify-content: end;
  color: #808080;
  width: 100%;
  font-size: 15px;
`

const Key = styled.dt`
  margin-bottom: 5px;
`

const Value = styled.dd`
  font-weight: 600;
  margin: ${props => props.$margin || 0};

  &::after {
   content: ${props => props.$withoutCostSymbol ? "" : "'₽'"};
  }
`

const TargetValue = styled(Value)`
  transition: 0.1s ease-in;
`

const BoxTargetValueAndEditIcon = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
    color: #d1d1d1;
  }

  &:hover > button {
    visibility: visible;
    opacity: 1;
  }
`

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


function Card() {

  return (
    <>
      {
        dataCards.map((card, id) => {
          const { name, dateAddition, price, image } = card;
          const { start, current, target } = price;

          return (
            <CommonBox key={id}>
              <SequenceNumber>{id}</SequenceNumber>
              <NameProduct>{name}</NameProduct>

              <ImageAndDataBox>
                <Image src={image} />

                <Stack>
                  <DataBox>
                    <KeyValueBox>
                      <Key>Начальная</Key>
                      <Value>{start}</Value>
                    </KeyValueBox>

                    <KeyValueBox>
                      <Key>Текущая</Key>
                      <Value>{current}</Value>
                    </KeyValueBox>


                    <KeyValueBox>
                      <Key>Целевая</Key>

                      <BoxTargetValueAndEditIcon>
                        <TargetValue>{target}</TargetValue>

                        <ButtonEditTargetPrice title="Редактировать целевую стоимость">
                          <EditIcon src={editIcon} alt="Иконка редактирования" />
                        </ButtonEditTargetPrice>
                      </BoxTargetValueAndEditIcon>

                    </KeyValueBox>
                  </DataBox>
                </Stack>
              </ImageAndDataBox>


              <DataBox $maxWidth="100%">
                <DateAdditionBox>
                  <Key>добавлено</Key>
                  <Value $withoutCostSymbol $margin="0 0 0 5px">{dateAddition}</Value>
                </DateAdditionBox>
              </DataBox>

              <ButtonDeleteCard title="Удалить карточку">
                <DeleteIcon src={deleteIcon} alt="Иконка удаления"></DeleteIcon>
              </ButtonDeleteCard>
            </CommonBox>
          )
        })
      }
    </>
  )
}

export default Card