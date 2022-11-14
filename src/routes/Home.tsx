/*
 Home Page
 - Extremely brief picture of who I am as a whole, with pictures :)
*/

import { Box, Card, CardContent, Grid, Typography, } from "@mui/material";
import { hoverCyan } from "../utils/constants";
import { HOME_CARDS } from "../utils/texts";
import "./home.css"

const spacing = 10

export default function Home(){
    // Creates a card component based on passed in title
    const getCardContent = (title: string) => {
        const items = HOME_CARDS[title.toLowerCase()]

        return (
            <a href={`/${title.toLowerCase()}`} style={{textDecoration: "none"}}> 
                <Card key={"key-"+title} className="card" color="secondary" sx={hoverCyan}>
                    <CardContent color="primary">
                        <Typography color="primary" sx={{
                            fontSize: 24,
                            fontWeight: "600",
                        }}>
                            {title}:
                        </Typography>
                        <Typography sx={{padding: "10px"}}>
                                {
                                    items.map((item) => {
                                        return (
                                            <li key={"key-"+item}>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
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
                            {getCardContent("About")}
                        </Grid>
                        <Grid item md={3}>
                            {/* {getCardContent("Projects")} */}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
