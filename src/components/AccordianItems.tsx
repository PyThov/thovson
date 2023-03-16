import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IPageDetail } from "../utils/texts";
import "./components.css";
import { hoverCyan } from "../utils/constants";

interface IAccordianItems {
  items: IPageDetail;
}
export const AccordianItems = ({ items }: IAccordianItems) => {
  const generateAccordianElement = (item: string, key: Number) => {
    return (
      <Accordion className="accordian" key={`accordian-${key}`}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "whitesmoke", ...hoverCyan }}
        >
          <Typography sx={{ fontWeight: "600" }}>{item}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {typeof items[item] === "object"
              ? Object.values(items[item]).map((listItem, i) => {
                  return <li key={i}>{listItem}</li>;
                })
              : items[item]}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div>
      {Object.keys(items).map((item, key) => {
        return generateAccordianElement(item, key);
      })}
    </div>
  );
};
