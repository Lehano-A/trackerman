import styled from "styled-components"

const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 15px;
  align-self: center;
  cursor: pointer;
`

function Submit({ children }) {
  return (
    <SubmitButton type="submit">{children}</SubmitButton>
  )
}

export default Submit