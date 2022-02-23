import React, { useContext } from "react";
import styled from "styled-components";
import { OverLay } from "../Modal/ModalItem";
import { OrderTitle, Total, TotalPrice } from "./Order";
import { ButtonCheckout } from "../Styled/ButtonCheckout";
import { projection } from "../Functions/secondayFunction";
import { totalPriceItems } from "../Functions/secondayFunction";
import { formatCurency } from "../Functions/secondayFunction";
import { Context } from "../Functions/context";
const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;
const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;
const rulesData = {
  name: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : "no toping"),
  ],
  choice: ["choice", (item) => (item ? item : "no choices")],
};

const sendOrder = (database, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));

  database.ref("orders").set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};
export const OrderConfirm = () => {
  const{
    orders:{orders, setOrders},
    auth:{authentication},
    orderConfirm:{setOpenOrderConfirm},
    firebaseDatabase
  }= useContext(Context);
  const database = firebaseDatabase();
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );
  return (
    <OverLay>
      <Modal>
        <OrderTitle>{authentication.displayName}/</OrderTitle>
        <Text>Осталось подтвердить Ваш заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout
          onClick={() => {
            sendOrder(database, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
          }}
        >
          Подтвердить
        </ButtonCheckout>
      </Modal>
    </OverLay>
  );
};
