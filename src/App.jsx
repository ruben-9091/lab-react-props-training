import "./App.css";
import IdCard from "./components/id-card/idCard.jsx";
import Greetings from "./components/greetings/greetings.jsx";
import Random from "./components/random/random.jsx";
import BoxColor from "./components/box-color/box-color.jsx";
import CreditCard from "./components/credit-card/credit-card.jsx";

function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>

        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div> 
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      <div>
        <BoxColor r="150" g="30" b="35"/>
      </div>
      
      <div style={{display: "flex", gap: "20px"}}>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        />
            
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
            
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" 
        />
      </div>

    </>
  );
}

export default App;


