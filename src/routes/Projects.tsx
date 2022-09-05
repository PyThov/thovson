/*
 Projects
 - Past, current, and future side projects
*/

import { Typography, useTheme } from "@mui/material"
import PageContainer from "../components/PageContainer"

export default function Projects(){
    const theme = useTheme()
    
    return (
        <PageContainer>
            <Typography
                variant="h5"
                fontWeight={600}
                sx={{ textDecoration: "underline" }}
                color={theme.palette.secondary.contrastText}
            >
                PROJECTS
            </Typography>
        </PageContainer>
    )
}