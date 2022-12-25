import { Typography } from "@mui/material";
import { theme } from "../theme";
import { IPageDetail } from "../utils/texts";
import { AccordianItems } from "./AccordianItems";
import PageContainer from "./PageContainer";

interface ICardInfo {
    title: string;
    items: IPageDetail;
}
export default function CardInfo({title, items}: ICardInfo){
    return (
        <PageContainer>
            {/* Title */}
            <Typography
                variant="h3"
                fontWeight={600}
                color={theme.palette.secondary.contrastText}
                gutterBottom
            >
                {title}
            </Typography>

            {/* Info */}
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <AccordianItems items={items} />
            </div>
        </PageContainer>
    )
}