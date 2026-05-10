
function BoxColor ({ r, g, b}) {
    return (
        <div style={{ 
            backgroundColor: `rgb(${r}, ${g}, ${b})`, 
            color: "white",
            padding: "50px 50px", 
            textAlign: "center", 
            fontSize: "30px", 
            border: "3px solid black", 
            gap: "20px",
            marginBottom: "10px"


            
            }}>
            RGB ({r},{g},{b})
        </div>
    )
}

export default BoxColor