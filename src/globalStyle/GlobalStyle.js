import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: Jura;
  }
`

function GlobalStyle() {
  return <Style />
}

export default GlobalStyle