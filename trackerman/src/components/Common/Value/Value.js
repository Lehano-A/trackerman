import styled from "styled-components"

const Box = styled.dd`
  font-weight: 600;
  margin: ${props => props.$margin || 0};

  &::after {
   content: ${props => props.$withoutCostSymbol ? "" : "'₽'"};
  }
`


function Value({ options, children }) {
  const { withoutCostSymbol, margin } = options || {};

  return (
    <Box $withoutCostSymbol={withoutCostSymbol} $margin={margin}>
      {children}
    </Box>
  )
}

export default Value