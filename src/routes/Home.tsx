/*
 Home Page
 - Extremely brief picture of who I am as a whole, with pictures :)
*/
import React from "react";
import { Box, Grid} from "@mui/material";
import CardModal from "../components/CardModal";
import { ABOUT, GOALS, RESUME, SKILLS } from "../utils/texts";
import "./home.css"

const spacing = 10;

export default function Home(){
    return (
        <div className="home">
            <Box>
                <Grid container rowSpacing={spacing}>
                    {/* FIRST ROW */}
                    <Grid container item spacing={0} justifyContent="space-evenly">
                        <Grid item md={3}>
                            <CardModal title="Goals" itemDetails={GOALS} />
                        </Grid>
                        <Grid item md={3}>
                            <CardModal title="Resume" itemDetails={RESUME} />
                        </Grid>
                    </Grid>
                    {/* SECOND ROW */}
                    <Grid container item spacing={0} justifyContent="space-evenly">
                        <Grid item md={3}>
                            <CardModal title="About" itemDetails={ABOUT} />
                        </Grid>
                        <Grid item md={3}>
                            <CardModal title="Skills" itemDetails={SKILLS} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
