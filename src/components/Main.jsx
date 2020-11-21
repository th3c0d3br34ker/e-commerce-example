import { Fragment, useState } from "react";

import Cart from "./Cart";
import Products from "./Porducts";

const Main = () => {
  const [cart, setCart] = useState([]);

  // AddItem function to handle Add Item Event.
  // Takes the item to be added as a parameter.
  const AddItem = (item) => {
    // Logic to check if the item already exists.
    if (!cart.includes(item)) {
      setCart([...cart, item]);
    }
  };

  // BuyItems function to clear out the cart.
  // Mocking to buy the Items in the cart.
  const BuyItems = () => {
    setCart([]);
  };

  return (
    <Fragment>
      <Products AddItem={AddItem} />
      <Cart cart={cart} onBuyItems={BuyItems} />
    </Fragment>
  );
};

export default Main;
