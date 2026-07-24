import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingScreen({ open }) {
  return (
    <Backdrop
      open={open}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Opacidade da tela
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingScreen;