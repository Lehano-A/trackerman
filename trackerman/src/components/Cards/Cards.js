import { useEffect } from "react";
import styled from "styled-components";
import { dataCards } from "../../constants";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { saveDataProducts } from "../../redux/slices/productsSlice";

const CommonBox = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

function Cards() {

  const dispatch = useDispatch()

  useEffect(() => {
    new Promise((resolve) => resolve(dataCards))
      .then((products) => dispatch(saveDataProducts(products)))
  }, [])

  const dataProducts = useSelector((state) => state.products.data)


  return (
    <CommonBox>
      {
        dataProducts?.map((data) => {
          return (
            <Card
              key={data.id}
              dataCard={data}
            />
          )
        })
      }
    </CommonBox>
  )
}

export default Cards;

