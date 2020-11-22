import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ProductCard from "./ProductCard";
import Toast from "../utils/Toast";
import data from "../utils/data.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 800,
    padding: 0,
    margin: 0,
  },
});

const Products = ({ cart, onAddItem }) => {
  const classes = useStyles();

  // State to show/hide the toast.
  const [addItemToast, setAddItemToast] = useState(false);
  const [itemPresentToast, setItemPresentToast] = useState(false);

  const AddItem = (item) => {
    // Logic to check if the item already exists.
    if (cart.includes(item)) {
      // If Item is already present then show a Toast.
      setAddItemToast(false);
      setItemPresentToast(true);
    } else {
      // Else call the onAddItem function then show a Toast.
      onAddItem(item);
      setItemPresentToast(false);
      setAddItemToast(true);
    }
  };

  return (
    <Container className={classes.root}>
      <Box flexWrap="wrap" display="flex" p={1} m={1}>
        {data.map((photoInfo) => (
          <Box key={photoInfo.id} p={1} m={1}>
            <ProductCard photoInfo={photoInfo} AddItem={AddItem} />
          </Box>
        ))}
      </Box>

      <Toast
        show={addItemToast}
        setShow={setAddItemToast}
        severity="success"
        message="Item added Successfully"
      />

      <Toast
        show={itemPresentToast}
        setShow={setItemPresentToast}
        severity="error"
        message="Item already present!"
      />
    </Container>
  );
};

export default Products;
