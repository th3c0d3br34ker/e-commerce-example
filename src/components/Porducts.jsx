import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ProductCard from "./ProductCard";
import data from "../utils/data.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 800,
    padding: 0,
    margin: 0,
  },
});

const Products = ({ AddItem }) => {
  const classes = useStyles();

  //Extract the Photos from the data.
  const { photos } = data;

  return (
    <Container className={classes.root}>
      <Box flexWrap="wrap" display="flex" p={1} m={1}>
        {photos.map((photoInfo) => (
          <Box key={photoInfo.id} p={1} m={1}>
            <ProductCard photoInfo={photoInfo} AddItem={AddItem} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Products;
