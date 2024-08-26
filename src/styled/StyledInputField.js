import styled from "styled-components";

const StyledInputField = styled.input`
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

export default StyledInputField