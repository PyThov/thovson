import React from "react"
import { Accordion, AccordionDetails, AccordionSummary, Typography, useTheme } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HOME_CARDS } from "../utils/texts";
import "./components.css"


export const GetAccordianItems = (category: string) => {
    const items = HOME_CARDS[category]


    const generateAccordianElement = (item: string, key: Number) => {
        return (
            <Accordion key={`accordian-${category}-${key}`}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>{item}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: "whitesmoke"}}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }

    return (
        <div>
            {items.map((item, key) => {
                return generateAccordianElement(item, key)
            })}
        </div>
    )
}
