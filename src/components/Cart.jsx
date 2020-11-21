import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CartItem from "./CartProduct";
import Container from "@material-ui/core/Container";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Toast from "./Toast";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

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

const Cart = ({ cart, onBuyItems }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleBuy = () => {
    // Don't call the function if Cart is EMPTY.
    if (cart.length !== 0) {
      onBuyItems();
      setShow(true);
    }
  };

  return (
    <Container className={classes.root}>
      <Box m={1} p={1}>
        <Box>
          <AppBar position="relative" color="inherit">
            <Toolbar className={classes.appBar}>
              <Typography>Mocking Buy Page</Typography>
              <Typography>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Box m={2}>
          <Button
            onClick={handleBuy}
            variant="outlined"
            color="inherit"
            fullWidth
            className={classes.button}
          >
            Buy Items
          </Button>
        </Box>
      </Box>
      {cart.map((cartInfo) => (
        <Box m={2}>
          <CartItem key={CartItem.id} cartItem={cartInfo} />
        </Box>
      ))}
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
      <Toast show={show} setShow={setShow} />
    </Container>
  );
};

export default Cart;
