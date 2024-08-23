import styled from "styled-components";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const CommonBox = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(600px, 700px));
  justify-content: center;
  gap: 30px;
`

function Cards() {

  const dataProducts = useSelector((state) => state.products.data)


  return (
    <CommonBox>
      {
        dataProducts?.map((data, id) => {
          return (
            <Card
              key={data.id}
              dataCard={data}
              sequenceNumber={id}
            />
          )
        })
      }
    </CommonBox>
  )
}

export default Cards;

