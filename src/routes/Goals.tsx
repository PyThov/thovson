/*
 Goals
 - What do I aspire to accomplish?
 - What have I accomplished?
*/

import { Typography, useTheme } from "@mui/material";
import PageContainer from "../components/PageContainer";

export default function Goals(){
    const theme = useTheme()

    return (
        <PageContainer>
            <Typography
                variant="h5"
                fontWeight={600}
                sx={{ textDecoration: "underline" }}
                color={theme.palette.secondary.contrastText}
            >
                GOALS
            </Typography>
        </PageContainer>
    )
}
