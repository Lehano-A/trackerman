import styled from "styled-components"

const Box = styled.main`
  margin: 0 30px;
`

function Main({ children }) {
  return (
    <Box>
      {children}
    </Box>
  )

}

export default Main