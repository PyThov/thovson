import { Card, CardContent, Typography, Modal, Zoom, Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { ReactNode } from "react";
import { hoverColor, hoverCyan } from "../utils/constants";
import { HOME_CARDS, IPageDetail } from "../utils/texts";
import { BootstrapButton } from "./common";
import { theme } from "../theme";
import CardInfo from "./CardInfo";

interface ICardModal {
    title: string;
    itemDetails: IPageDetail;
}
// Creates a card component based on passed in title
export default function CardModal({title, itemDetails}: ICardModal) {
    const [open, setOpen] = React.useState(false)

    const items = HOME_CARDS[title.toLowerCase()]
    
    const onClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <BootstrapButton onClick={() => setOpen(true)} style={{fontSize: 4}}>
                <Card key={"key-"+title} className="card" color="secondary" sx={hoverColor(theme.palette.neutral.light)}>
                    <CardContent color="primary">
                        <Typography color="secondary" sx={{
                            fontSize: 24,
                            fontWeight: "600",
                        }}>
                            {title}:
                        </Typography>
                        <Typography sx={{
                            padding: "10px",
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column"
                        }}>
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
            </BootstrapButton>
            <Modal open={open} onClose={onClose}>
                <Zoom in={open}>                
                    <div style={{marginTop: "2%", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px"}}>
                        <Fab color="error" aria-label="add" onClick={onClose}>
                            <CloseIcon />
                        </Fab>
                        <CardInfo title={title} items={itemDetails} />
                    </div>
                </Zoom>
            </Modal>
        </div>
    )
}
