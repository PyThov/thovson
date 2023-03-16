/*
 Resume
 - Your resume, duh
    - Skills
    - Work experience
    - etc.
*/

import { Typography, useTheme } from "@mui/material";
import PageContainer from "../components/PageContainer";
import { GetAccordianItems } from "../components/utils";
import { RESUME } from "../utils/texts";

export default function Resume() {
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
        RESUME
      </Typography>

      {/* Info */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {GetAccordianItems(RESUME)}
      </div>
    </PageContainer>
  );
}
