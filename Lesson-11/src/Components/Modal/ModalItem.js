import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../Styled/ButtonCheckout";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { formatCurency } from "../Functions/secondayFunction";
import { totalPriceItems } from "../Functions/secondayFunction";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";
import { useToppings } from "../Hooks/useToppings";
import { useChoices } from "../Hooks/useChoices";
const OverLay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;
const Modal = styled.div`
  background-color: white;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-position: center;

  background-size: cover;
`;
const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px);
  padding: 30px;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Pacifico, cursive;

  font-weight: 700;
  font-size: 24px;
  /* border: 1px solid black; */

  width: 540px;
`;
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdid = openItem.index > -1;
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };
  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };
  const edidOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };
  // if (!openItem) return null;
  return (
    <OverLay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{formatCurency(openItem.price)}</div>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена</span>
            <span>{formatCurency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonCheckout
            onClick={isEdid ? edidOrder : addToOrder}
            disabled={order.choices && !order.choice}
          >
            {isEdid ?'Редактировать':'Добавить'}
          </ButtonCheckout>
        </Content>
      </Modal>
    </OverLay>
  );
};
