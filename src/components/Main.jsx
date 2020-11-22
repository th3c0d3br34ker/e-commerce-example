import { Fragment, useState } from "react";

import BuyPage from "./BuyPage/BuyPage";
import Products from "./ProductsPage/ProductsPage";

const Main = () => {
  const [cart, setCart] = useState([]);

  // AddItem function to handle Add Item Event.
  // Takes the item to be added as a parameter.
  const AddItem = (item) => {
    setCart([...cart, item]);
  };

  // BuyItems function to clear out the cart.
  // Mocking to buy the Items in the cart.
  const BuyItems = () => {
    setCart([]);
  };

  return (
    <Fragment>
      <Products cart={cart} onAddItem={AddItem} />
      <BuyPage cart={cart} onBuyItems={BuyItems} />
    </Fragment>
  );
};

export default Main;
