import React from "react"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IPageDetail } from "../utils/texts";
import "./components.css"
import { hoverCyan } from "../utils/constants";


export const GetAccordianItems = (items: IPageDetail) => {
    console.log(items)

    const generateAccordianElement = (item: string, key: Number) => {
        console.log(key)
        return (
            <Accordion
                className="accordian"
                key={`accordian-${key}`}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{backgroundColor: "whitesmoke", ...hoverCyan}}
                >
                    <Typography>{item}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {items[item]}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }

    return (
        <div>
            {Object.keys(items).map((item, key) => {
                return generateAccordianElement(item, key)
            })}
        </div>
    )
}
