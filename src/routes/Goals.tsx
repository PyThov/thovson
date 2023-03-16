/*
 Goals
 - What do I aspire to accomplish?
 - What have I accomplished?
*/

import { Typography, useTheme } from "@mui/material";
import PageContainer from "../components/PageContainer";
import { GetAccordianItems } from "../components/utils";
import { GOALS } from "../utils/texts";

export default function Goals() {
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
        GOALS
      </Typography>

      {/* Info */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {GetAccordianItems(GOALS)}
      </div>
    </PageContainer>
  );
}
