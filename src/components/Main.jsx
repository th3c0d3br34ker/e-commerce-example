import { Fragment, useState } from "react";

import BuyPage from "./BuyPage/BuyPage";
import Products from "./ProductsPage/ProductsPage";

const Main = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  // AddItem function to handle Add Item Event.
  // Takes the item to be added as a parameter.
  const AddItem = (item) => {
    // Logic to check if the item already exists.
    if (!cart.includes(item)) {
      setCart([...cart, item]);
    } else {
      setShow(true);
    }
  };

  // BuyItems function to clear out the cart.
  // Mocking to buy the Items in the cart.
  const BuyItems = () => {
    setCart([]);
  };

  return (
    <Fragment>
      <Products AddItem={AddItem} show={show} setShow={setShow} />
      <BuyPage cart={cart} onBuyItems={BuyItems} />
    </Fragment>
  );
};

export default Main;
