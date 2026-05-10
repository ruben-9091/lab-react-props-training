import "./credit-card.css"

function CreditCard ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    
    const lastFour = number.slice(-4); 
    const month = String(expirationMonth).padStart(2, "0");
    const year = String(expirationYear).slice(-2); 
    const cardVisa = "/src/assets/images/visa.png"
    const cardMaster = "/src/assets/images/master-card.svg"
    const logoCard = type === "Visa" ? cardVisa : cardMaster

    
    
    return (
        <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
            <div className="type">
                <img src={logoCard} alt ={type}/>
            </div>
            <div className="creditNumber">
                •••• •••• •••• {lastFour}
            </div>
            <div className="data">
                <div className="expires">Expires {month}/{year} </div>
                <div className="bank">{bank} </div>
            </div>
            <div className="data-owner">
                {owner}
            </div>
        </div>
    )
}

export default CreditCard