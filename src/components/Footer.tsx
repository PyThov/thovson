import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/Github";
import { FOOTER } from "../utils/texts";
import { GITHUB_REPO_HREF, STYLE } from "../utils/constants";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100vw",
        height: STYLE.footerVH,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        gap: "10px",
      }}
    >
      <Tooltip title="Thovson GitHub Repo" arrow>
        <IconButton
          aria-label="github"
          href={GITHUB_REPO_HREF}
          target="_blank"
          sx={{
            borderRadius: "4px",
            color: "secondary.contrastText",
            ":hover": {
              backgroundColor: "secondary.dark",
              color: "#fff",
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Typography color="secondary.contrastText">{FOOTER}</Typography>
    </Box>
  );
}
