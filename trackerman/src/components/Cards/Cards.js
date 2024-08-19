import { useEffect } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { saveDataProducts } from "../../redux/slices/productsSlice";
import { getProductList } from "../../api/getProductList/getProductList";

const CommonBox = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill,  minmax(600px, 700px));
  justify-content: center;
  gap: 30px;
`

function Cards() {

  const dispatch = useDispatch()

  useEffect(() => {
    getProductList(dispatch, saveDataProducts)
  }, [])

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

