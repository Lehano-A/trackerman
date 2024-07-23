import { styled } from 'styled-components'
import { dataCards } from "../../../constants"

const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageAndDataBox = styled.div`
  display: flex;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
`

const Name = styled.h2`
  display: inline-block;
  max-width: 600px;
  font-size: 18px;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
`

const DataBox = styled.dl`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0;
`

const KeyValueBox = styled.div`
  display: flex;
  max-width: 300px;
  justify-content: space-between;

  &:nth-child(1n):not(:last-child) {
    margin-bottom: 5px;
  }
`

const DateAdditionBox = styled(KeyValueBox)`
  justify-content: end;
`

const Key = styled.dt`
  &::after {
    content: ${props => props.$withoutColon ? "" : "':'"};
  }
`

const Value = styled.dd`
  font-weight: 600;
  margin-left: ${props => props.$marginLeft || '15px'};

  &::after {
   content: ${props => props.$withoutCostSymbol ? "" : "'₽'"};
  }
`

const PriceSubtitle = styled.h6`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 15px 0;
`


function Card() {
  return (
    <>
      {
        dataCards.map((card) => {
          const { name, dateAddition, price, image } = card;
          const { start, current, target } = price;

          return (
            <CommonBox>
              <Name>{name}</Name>

              <ImageAndDataBox>
                <Image src={image} />


                <Stack>
                  <PriceSubtitle>Цена</PriceSubtitle>

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
                      <Value>{target}</Value>
                    </KeyValueBox>
                  </DataBox>
                </Stack>


                <DataBox>
                  <DateAdditionBox>
                    <Key $withoutColon>добавлено</Key>
                    <Value $withoutCostSymbol $marginLeft="5px">{dateAddition}</Value>
                  </DateAdditionBox>
                </DataBox>


              </ImageAndDataBox>

            </CommonBox>
          )
        })
      }
    </>
  )
}

export default Card