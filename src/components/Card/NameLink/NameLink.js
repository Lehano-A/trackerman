import styled from "styled-components"

const Link = styled.a`
  color: #000;
  margin-bottom: 25px;
`

const NameProduct = styled.h2`
  display: inline-block;
  font-size: 22px;
  margin: 0;
`


function NameLink({ link, children }) {
  return (
    <Link href={link} target="_blank" referrerPolicy="no-referrer">
      <NameProduct>{children}</NameProduct>
    </Link>
  )
}

export default NameLink
