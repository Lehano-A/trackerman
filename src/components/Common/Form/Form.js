import styled from "styled-components"

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`


function Form({ handleOnSubmit, children }) {
  return (
    <FormBox onSubmit={handleOnSubmit}>
      {children}
    </FormBox>
  )
}

export default Form