import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

// Custom Toast Bar
const Toast = ({ show, setShow, severity, message }) => (
  <Snackbar
    autoHideDuration={3000}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    onClose={(event, reason) => {
      event && console.log("Toast");
      if (reason === "clickaway") {
        return;
      }
      setShow(false);
    }}
    open={show}
  >
    <MuiAlert severity={severity} variant="filled">
      {message}
    </MuiAlert>
  </Snackbar>
);

export default Toast;
