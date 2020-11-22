import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Cart from "./Cart";
import Container from "@material-ui/core/Container";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Toast from "../utils/Toast";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    color: "black",
  },
});

const BuyPage = ({ cart, onBuyItems }) => {
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
    <Container>
      <Box m={1} p={1}>
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
      <Cart cart={cart} handleBuy={handleBuy} />
      <Toast
        show={show}
        setShow={setShow}
        severity="success"
        message="Order Placed Successfully"
      />
    </Container>
  );
};

export default BuyPage;
