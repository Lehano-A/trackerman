import { styled } from 'styled-components'
import ButtonDeleteCard from './ButtonDeleteCard/ButtonDeleteCard'
import KeyValue from './KeyValue/KeyValue'
import ImageProduct from './ImageProduct/ImageProduct'
import NameLink from './NameLink/NameLink'
import { getDate } from '../../helpers/getDate'
import Key from '../Common/Key/Key'
import Value from '../Common/Value/Value'


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

const ImageAndDataBox = styled.div`
  display: flex;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 40px;
`

const DataBox = styled.dl`
  display: flex;
  max-width: ${props => props.$maxWidth || '500px'};
  width: 100%;
  margin: 0;
`

const DateAdditionBox = styled.div`
  display: flex;
  justify-content: end;
  color: #808080;
  width: 100%;
  font-size: 15px;
`


function Card({ dataCard, sequenceNumber }) {

  const { id, name, createdAt, price, productUrl, imageUrl } = dataCard
  const { withCard } = price
  const { start, current, target } = withCard


  return (
    <CommonBox key={id}>
      <SequenceNumber>{sequenceNumber}</SequenceNumber>

      <NameLink link={productUrl}>{name}</NameLink>

      <ImageAndDataBox>
        <ImageProduct imageUrl={imageUrl} />

        <Stack>
          <DataBox>
            <KeyValue data={{ key: 'Начальная', value: start }} />
            <KeyValue data={{ key: 'Текущая', value: current }} />
            <KeyValue data={{ key: 'Целевая', value: target }} type="edit" />
          </DataBox>
        </Stack>
      </ImageAndDataBox>


      <DataBox $maxWidth="100%">
        <DateAdditionBox>
          <Key>добавлено</Key>
          <Value options={{
            withoutCostSymbol: true,
            margin: "0 0 0 5px"
          }}>
            {getDate(createdAt)}
          </Value>
        </DateAdditionBox>
      </DataBox>

      <ButtonDeleteCard dataDeletingCard={dataCard} />
    </CommonBox>
  )
}

export default Card