// utils/SnackbarUtils.jsx
import { Snackbar } from "@mui/material";
import { useState, useCallback } from "react";

const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = useCallback((msg) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  const SnackbarComponent = (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      ContentProps={{
        sx: {
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#333" : "#fff",
          color: (theme) =>
            theme.palette.mode === "light" ? "#fff" : "#000",
        },
      }}
      message={message}
    />
  );

  return { showMessage, SnackbarComponent };
};

export default useSnackbar;
