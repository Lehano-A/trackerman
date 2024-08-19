import styled from "styled-components"

const Box = styled.dt`
  margin-bottom: 5px;
`


function Key({ children }) {
  return (
    <Box>{children}</Box>
  )
}

export default Key