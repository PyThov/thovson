/*
 Home Page
 - Extremely brief picture of who I am as a whole, with pictures :)
*/

import { Box, Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import { getCardText } from "../utils/utils";
import "./home.css"

const spacing = 10

export default function Home(){
    const theme = useTheme()

    // Creates a card component based on passed in title
    const getCardContent = (title: string) => {
        return (
            <a href={`/${title}`} style={{textDecoration: "none"}}> 
                <Card className="card" color="secondary" sx={{":hover": {backgroundColor: "#b4ffff"}}}>
                    <CardContent color="primary">
                        <Typography color="primary" sx={{
                            fontSize: 24,
                            fontWeight: "600",
                        }}>
                            {title}:
                        </Typography>
                        <Typography>
                            {getCardText(title)}
                        </Typography>
                    </CardContent>
                </Card>
            </a>
        )
    }

    return (
        <div className="home">
            <Box>
                <Grid container rowSpacing={spacing}>
                    {/* FIRST ROW */}
                    <Grid container item spacing={0} justifyContent="space-evenly">
                        <Grid item md={3}>
                            {getCardContent("Goals")}
                        </Grid>
                        <Grid item md={3}>
                            {getCardContent("Resume")}
                        </Grid>
                    </Grid>
                    {/* SECOND ROW */}
                    <Grid container item spacing={0} justifyContent="space-evenly">
                        <Grid item md={3}>
                            {getCardContent("Projects")}
                        </Grid>
                        <Grid item md={3}>
                            {getCardContent("About")}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
