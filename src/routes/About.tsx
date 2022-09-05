/*
 About
 - Misc. about that hasn't been covered yet
*/

import { Typography, useTheme } from "@mui/material"
import PageContainer from "../components/PageContainer"

export default function About(){
    const theme = useTheme()
    
    return (
        <PageContainer>
            <Typography
                variant="h5"
                fontWeight={600}
                sx={{ textDecoration: "underline" }}
                color={theme.palette.secondary.contrastText}
            >
                ABOUT
            </Typography>
        </PageContainer>
    )
}
