import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "auto 0",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    borderRadius: 16,
  },
  cardBody: {
    margin: 8,
    marginLeft: 12,
    padding: 8,
    borderRadius: "0 16px 16px 0",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  media: {
    maxWidth: 200,
  },
});

const CartCard = ({ cartItem }) => {
  const classes = useStyles();

  const { id, src, photographer, width, height, cost } = cartItem;

  return (
    <Card className={classes.root}>
      <CardMedia component="img" className={classes.media} image={src.small} />
      <CardContent className={classes.cardBody}>
        <Typography component="h1" variant="h6" className={classes.info}>
          Picture by {photographer}
        </Typography>

        <Typography
          variant="body1"
          className={classes.infoData}
          color="textSecondary"
        >
          id: #{id}
          <br />
          Original Resolution: {width}x{height}
          <br />
          Cost: ₹ {cost}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartCard;
