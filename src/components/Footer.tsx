import React from "react";
import { Box, Typography } from "@mui/material";
import { FOOTER } from "../utils/texts";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        height: "5vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
      }}
    >
      <Typography color="secondary.contrastText">{FOOTER}</Typography>
    </Box>
  );
}
