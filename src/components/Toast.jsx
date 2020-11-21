import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const Toast = ({ show, setShow }) => (
  <Snackbar
    autoHideDuration={3000}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    onClose={(event, reason) => {
      console.log(event);
      if (reason === "clickaway") {
        return;
      }
      setShow(false);
    }}
    severity="success"
    open={show}
  >
    <MuiAlert severity="success" elevation={6} variant="filled">
      Order Placed Successfully
    </MuiAlert>
  </Snackbar>
);

export default Toast;
