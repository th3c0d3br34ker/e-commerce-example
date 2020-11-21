import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//  Define the styles for the Card.
//  Took a while, I think its worth it. 😬
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: "auto 0",
  },
  media: {
    borderRadius: "8px",
  },
  cardBody: {
    borderRadius: "8px",
  },
  by: {
    color: "grey",
    fontSize: "13px",
    padding: "8px 8px 0 0",
    float: "right",
    textDecoration: "none",
  },
  info: {
    padding: "8px",
    marginTop: "16px",
  },
  infoData: {
    padding: "8px",
    color: "rgb(0 0 0 / 0.8)",
  },
  button: {
    // "border": "1px solid black",
    "backgroundColor": "grey",
    "color": "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
});

const ProductCard = ({ photoInfo, AddItem }) => {
  const classes = useStyles();
  const {
    id,
    photographer,
    photographer_url,
    src,
    width,
    height,
    url,
  } = photoInfo;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardBody}>
        {/* Image of the Card */}
        <CardMedia
          component="img"
          className={classes.media}
          image={src.medium}
        />
        {/* Text of the Card */}
        <Typography
          className={classes.by}
          component="a"
          href={photographer_url}
        >
          by {photographer}
        </Typography>

        <Typography component="h1" variant="h6" className={classes.info}>
          More Info
        </Typography>

        <Typography
          variant="body1"
          className={classes.infoData}
          color="textSecondary"
        >
          id: #{id}
          <br />
          Original Resolution: {width}x{height}
        </Typography>

        <CardActions>
          <Button
            className={classes.button}
            size="medium"
            onClick={() => {
              AddItem(photoInfo);
            }}
            variant="outlined"
            endIcon={<AddShoppingCartIcon />}
          >
            Add Item
          </Button>
          <Button
            className={classes.button}
            size="medium"
            target="_black"
            href={url}
            variant="outlined"
            endIcon={<OpenInNewIcon />}
          >
            See Original
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
