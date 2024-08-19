import styled from "styled-components"

const LabelText = styled.label`
  margin-bottom: 5px;
`

function Label({ options, children }) {
  const { htmlFor } = options

  return (
    <LabelText htmlFor={htmlFor}> {children} </LabelText>
  )
}

export default Label