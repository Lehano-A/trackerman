import { CircularProgress } from "@mui/material"
import styled from "styled-components"

const BoxIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Indicator = styled(CircularProgress)`
 filter: invert(96%) sepia(0%) saturate(0%) hue-rotate(147deg) brightness(83%) contrast(89%);
`


function Preloader() {
  return (
    <BoxIndicator>
      <Indicator />
    </BoxIndicator>
  )
}

export default Preloader