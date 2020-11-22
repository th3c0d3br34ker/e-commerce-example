import { useEffect, useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CartItem from "./CartProduct";
import Container from "@material-ui/core/Container";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "8px",
    margin: "8px",
    color: "white",
  },
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    color: "black",
  },
  button: {
    color: "white",
  },
});

const Cart = ({ cart, handleBuy }) => {
  const classes = useStyles();
  const [totalCost, setTotalCost] = useState(0);

  // totalCost to get the total Cost of the items in the cart.
  // Run it each time the value of cart Updates.
  useEffect(() => {
    setTotalCost(cart.reduce((totalCost, item) => totalCost + item.cost, 0));
  }, [cart]);

  return (
    <Container className={classes.root}>
      {cart.map((cartInfo) => (
        <Box m={1} key={cartInfo.id}>
          <CartItem cartItem={cartInfo} />
        </Box>
      ))}

      {totalCost ? (
        <Box m={2} display="flex" justifyContent="space-between">
          <Button
            onClick={handleBuy}
            variant="outlined"
            color="inherit"
            className={classes.button}
            endIcon={<ShoppingCart />}
            title="Buy Items"
          >
            Buy Items
          </Button>

          <Typography variant="h6">Total Cost: ₹ {totalCost}</Typography>
        </Box>
      ) : null}

      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
    </Container>
  );
};

export default Cart;
