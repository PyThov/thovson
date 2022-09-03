import { HOME_CARDS } from "./texts"

export function getCardText(title: string): string {
    
    const text = HOME_CARDS[title.toLowerCase()]
    
    if(text == undefined){
        return ""
    } else {
        return text
    }
}
