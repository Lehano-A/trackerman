import styled from "styled-components"
import StyledInputField from "../../../styled/StyledInputField"
import StyledLabel from "../../../styled/StyledLabel"

const Fieldset = styled.fieldset`
  border: 1px dashed;
  padding: 30px;
`

const BoxLabelAndRadio = styled.div`
  display: flex;
  align-items: center;
  &:nth-of-type(1n):not(:last-of-type) {
    margin-bottom: 10px;
  }
`

const Radio = styled.input`
  margin: 0 10px 0 0;

  &:nth-of-type(1n):not(:last-of-type) {
    margin-bottom: 15px;
  }
`

const Label = styled(StyledLabel)`
  margin: 0;
`

const InputField = styled(StyledInputField)`
max-width: 80px;
margin-left: 7px;
border: 1px solid;
text-align: right;
padding-right: 20px;

 &:last-of-type {
    margin-bottom: 0px;
 }
`

const BoxInputField = styled.div`
  position: relative;

&::after {
  content: '₽';
  line-height: 0.8;
  font-weight: bold;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
}
`

function ChoiseTypeNotification({ handleOnChange }) {
  return (
    <Fieldset onChange={handleOnChange}>
      <legend>Выберите тип уведомлений при изменении цены</legend>
      <BoxLabelAndRadio >
        <Radio disabled id="anyChange" name="choiseTypeNotification" type="radio" required />
        <Label htmlFor="anyChange">
          При любом изменении цены
        </Label>
      </BoxLabelAndRadio>

      <BoxLabelAndRadio>
        <Radio id="priceReductionStartWith" name="choiseTypeNotification" type="radio" required />
        <Label htmlFor="priceReductionStartWith">
          При изменении цены в меньшую сторону начиная c
        </Label>

        <BoxInputField>
          <InputField required />
        </BoxInputField>
      </BoxLabelAndRadio>

      <BoxLabelAndRadio>
        <Radio disabled id="trackingDynamics" name="choiseTypeNotification" type="radio" required />
        <Label htmlFor="trackingDynamics">
          Без уведомлений (отслеживание динамики цены)
        </Label>
      </BoxLabelAndRadio>
    </Fieldset>
  )

}

export default ChoiseTypeNotification