import styled from "styled-components";

const CommonBox = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

function Cards({ children }) {
  return (<CommonBox>{children}</CommonBox>)
}

export default Cards;

