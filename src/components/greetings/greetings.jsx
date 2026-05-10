import "./greetings.css"

function Greetings({ lang, children }) {
  let greeting = "";

  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "en":
      greeting = "Hello";
      break;
    default:
      greeting = "Hello";
  }

  return (
    <div className="id-greetings">
      {greeting} {children}
    </div>
  );
}

export default Greetings;
