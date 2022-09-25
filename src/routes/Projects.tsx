/*
 Projects
 - Past, current, and future side projects
*/

import { Typography, useTheme } from "@mui/material"
import PageContainer from "../components/PageContainer"
import { GetAccordianItems } from "../components/utils"
import { PROJECTS } from "../utils/texts"

export default function Projects(){
    const theme = useTheme()
    
    return (
        <PageContainer>
        {/* Title */}
            <Typography
                variant="h5"
                fontWeight={600}
                color={theme.palette.secondary.contrastText}
                sx={{ textDecoration: "underline", marginBottom: "30px" }}
            >
                PROJECTS
            </Typography>

            {/* Info */}
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                {GetAccordianItems(PROJECTS)}
            </div>
        </PageContainer>
    )
}