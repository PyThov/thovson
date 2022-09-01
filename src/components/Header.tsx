import React from "react"
import { Button } from "@mui/material"
import "./components.css"

const HeaderSeparator = () => {
    return ( 
        <div 
            style={{
                borderLeft: "solid",
                borderWidth: "2px",
                borderColor: "whitesmoke",
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
    const active = window.location.pathname

    if (active.includes(button)) {
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
                size="large"
                variant={getVariant(title)}
                href={`/${title.toLowerCase()}`}
            >
                {title}
            </Button>
        )
    }
    
    return (
        <div className="header">
            <a href="/">
                <div className="headerTitle">Noah Thovson</div>
            </a>
            <HeaderSeparator />
            {generateButton("goals")}
            {generateButton("resume")}
            {generateButton("projects")}
            {generateButton("about")}
        </div>
    )
}
