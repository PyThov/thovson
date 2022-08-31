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
 - Add React routes for each page
*/

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitle">PyThov</div>
            <HeaderSeparator />
        </div>
    )
}
