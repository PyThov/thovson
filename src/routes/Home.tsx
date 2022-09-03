/*
 Home Page
 - Extremely brief picture of who I am as a whole, with pictures :)
*/

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { getCardText } from "../utils/utils";
import "./home.css"

const spacing = 10


export default function Home(){
    
    const getCardContent = (title: string) => {
        return (
            <a href={`/${title}`} style={{textDecoration: "none"}}> 
                <Card className="card">
                    <CardContent>
                        <Typography className="cardTitle" sx={{
                            fontSize: 24,
                            fontWeight: "600",
                            color: "#529CCC",
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