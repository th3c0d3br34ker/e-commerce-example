import { Fragment, useEffect, useState } from "react";

import BuyPage from "./BuyPage/BuyPage";
import Products from "./ProductsPage/ProductsPage";

const Main = () => {
  const [cart, setCart] = useState([]);

  // useEffect runs once when component renders.
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("e-commerce-app-data"));
    if (data) {
      setCart(data);
    }
  }, []);

  // useEffect runs everytime the value of Cart changes.
  useEffect(() => {
    localStorage.setItem("e-commerce-app-data", JSON.stringify(cart));
  }, [cart]);

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
