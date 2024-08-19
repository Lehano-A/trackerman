import styled from "styled-components"

const Image = styled.img`
  width: 150px;
  height: 150px;
`

function ImageProduct({ imageUrl }) {
  return (
    <Image src={imageUrl} />
  )
}

export default ImageProduct