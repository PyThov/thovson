/*
 About
 - Misc. about that hasn't been covered yet
*/

import { Typography, useTheme } from "@mui/material";
import PageContainer from "../components/PageContainer";
import { GetAccordianItems } from "../components/utils";
import { ABOUT } from "../utils/texts";

export default function About() {
  const theme = useTheme();

  return (
    <PageContainer>
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight={600}
        color={theme.palette.secondary.contrastText}
        sx={{ textDecoration: "underline", marginBottom: "30px" }}
      >
        ABOUT
      </Typography>

      {/* Info */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {GetAccordianItems(ABOUT)}
      </div>
    </PageContainer>
  );
}
