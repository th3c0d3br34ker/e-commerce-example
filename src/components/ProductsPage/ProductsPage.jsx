import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ProductCard from "./ProductCard";
import Toast from "../utils/Toast";
import data from "../utils/data.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 800,
    padding: 0,
    margin: 0,
  },
});

const Products = ({ AddItem, show, setShow }) => {
  const classes = useStyles();

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
        show={show}
        setShow={setShow}
        severity="error"
        message="Item already present!"
      />
    </Container>
  );
};

export default Products;
