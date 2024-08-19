import styled from "styled-components"

const InputField = styled.input`
  height: 25px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &:nth-child(1n) {
    margin-bottom: 15px;
  }

  &:last-of-type {
    margin-bottom: 45px;
  }
`

function Input({ options, }) {

  const {
    id = null,
    minLength,
    type,
    handleOnChange,
    required = false
  } = options;

  return (
    <InputField
      id={id}
      minLength={minLength}
      type={type}
      onChange={handleOnChange}
      required={required}
    />
  )
}

export default Input