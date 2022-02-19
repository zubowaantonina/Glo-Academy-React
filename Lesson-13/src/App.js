import React from "react";
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/database'
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from "./Components/Styled/GlobalStyle";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from "./Components/Hooks/useAuth";
import { useTitle } from "./Components/Hooks/useTitle";

const firebaseConfig = {
  apiKey: "AIzaSyBQezqggF0Lve349va8hKeK3hmu2oV4axg",
  authDomain: "mrdonald-82dae.firebaseapp.com",
  projectId: "mrdonald-82dae",
  storageBucket: "mrdonald-82dae.appspot.com",
  messagingSenderId: "1047660276542",
  appId: "1:1047660276542:web:6042401f0a73355a6e5a6f"
};
firebase.initializeApp(firebaseConfig);
function App() {
 
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);
  return (
    <>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}
       firebaseDatabase={firebase.database}
      />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
