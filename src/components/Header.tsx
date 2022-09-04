import React from "react"
import { Button, Typography, useTheme } from "@mui/material"
import "./components.css"

/*
TODO: 
 - Add buttons on header for different pages
    -  goals, past work experience, accomplishments, social media
 - Add React routes for each page
*/

const getVariant = (button: string) => {
    const active = window.location.pathname.toLowerCase()

    if (active.includes(button.toLowerCase())) {
        return "outlined"
    } else {
        return "text"
    }
}

export default function Header(){
    const theme = useTheme()

    const HeaderSeparator = () => {
        return ( 
            <div 
                style={{
                    borderLeft: "solid",
                    borderWidth: "2px",
                    borderColor: theme.palette.primary.contrastText,
                    height: "2em",
                    marginLeft: 20,
                    marginRight: 20,
                }}
            />
        )
    }

    const generateButton = (title: string) => {
        return (
            <Button
                className="headerButton"
                size="large"
                variant={getVariant(title)}
                href={`/${title}`}
                sx={{
                    color: theme.palette.primary.light
                }}
            >
                {title}
            </Button>
        )
    }
    
    return (
        <div className="header" style={{backgroundColor: theme.palette.secondary.main}}>
            <Button href="/" sx={{ marginLeft: 3 }} color="secondary" variant="contained">
                <Typography 
                    fontSize={16}
                    fontWeight={600}
                    color={theme.palette.secondary.contrastText}
                    >
                        Noah Thovson
                </Typography>
            </Button>
            <HeaderSeparator />
            {generateButton("goals")}
            {generateButton("resume")}
            {generateButton("projects")}
            {generateButton("about")}
        </div>
    )
}
