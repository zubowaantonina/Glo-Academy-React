import styled from "styled-components";
export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-family: inherit;
  font-size: inherit;
  line-height: 25px;
  border-color: transparent;
  color: #ffffff;
  background-color: #299b01;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover {
    border-color: #299b01;
    color: #299b01;
    background-color: #fff;
  }
  &:disabled{
    color:#bbb;
    background-color: #ccc;
    border-color:#aaa;
  }
`;
