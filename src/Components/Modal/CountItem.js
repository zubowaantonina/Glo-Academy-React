import React from "react";
import styled from "styled-components";

const CountWaper = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const CountImput = styled.input`
  font-size: 20px;
  text-align:center;
  width: 55px;
  border: 1px solid #333333;
background: #FFFFFF;
`;
const CountButton = styled.button`
  background-color:  #C4C4C4;
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
border:none;
height: 30px;
text-align: center;
  width: 25px;
  
`;
export function CountItem({ count, setCount, onChange }) {
  return (
    <CountWaper>
      <span>Количество</span>
      <div>
        <CountButton disabled={count <= 1} onClick={() => setCount(count - 1)}>
          -
        </CountButton>
        <CountImput
          type="number"
          min="1"
          max="100"
          value={count < 1 ? 1 : count}
          onChange={onChange}
        />
        <CountButton onClick={() => setCount(count + 1)}>+</CountButton>
      </div>
    </CountWaper>
  );
}
