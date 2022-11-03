
export default function Link(){

    const linkContainer = {
        width: "100%",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",

    }
    const linkStyle = {
        position: "fixed",
        bottom: "10px",
        color: "white",
        fontSize: "20px",
        display: "inline-block",
        // verticalAlign: "top",
        
    }
    return(
        <div style={linkContainer}>

            <div style={linkStyle}>www.dearvalue.com</div>
        </div>
    )
}