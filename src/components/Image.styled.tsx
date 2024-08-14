import styled from "styled-components";


export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 280px;
  align-self: center;
  border-radius: 10px;
  padding-top: 10px;
`