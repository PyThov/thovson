/*
 Resume
 - Your resume, duh
    - Skills
    - Work experience
    - etc.
*/

import { Typography, useTheme } from "@mui/material";
import PageContainer from "../components/PageContainer";

export default function Resume(){
    const theme = useTheme()
    
    return (
        <PageContainer>
            <Typography
                variant="h5"
                fontWeight={600}
                sx={{ textDecoration: "underline" }}
                color={theme.palette.secondary.contrastText}
            >
                RESUME
            </Typography>
        </PageContainer>
    )
}
