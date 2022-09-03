import React from "react"
import { Button, Typography } from "@mui/material"
import "./components.css"
import { theme } from "../theme"

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

    const generateButton = (title: string) => {
        return (
            <Button
                className="headerButton"
                color="primary"
                size="large"
                variant={getVariant(title)}
                href={`/${title}`}
            >
                {title}
            </Button>
        )
    }
    
    return (
        <div className="header" style={{backgroundColor: theme.palette.secondary.main}}>
            <Button href="/" sx={{ marginLeft: 5 }} color="secondary" >
                <Typography fontSize={16} fontWeight={600} color={theme.palette.secondary.contrastText}>Noah Thovson</Typography>
            </Button>
            <HeaderSeparator />
            {generateButton("goals")}
            {generateButton("resume")}
            {generateButton("projects")}
            {generateButton("about")}
        </div>
    )
}
