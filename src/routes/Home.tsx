/*
 Home Page
 - Extremely brief picture of who I am as a whole, with pictures :)
*/

import { Box, Card, CardContent, Grid, Typography, } from "@mui/material";
import { HOME_CARDS } from "../utils/texts";
import "./home.css"

const spacing = 10

export default function Home(){
    // Creates a card component based on passed in title
    const getCardContent = (title: string) => {
        const items = HOME_CARDS[title.toLowerCase()]

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
                            <ul>
                                {
                                    items.map((item) => {
                                        return (
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
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
