import styles from "./App.css";

export async function fetchCityCoordinates(city) {
    try {
        const result = await fetch(
          `https://nominatim.openstreetmap.org/search?city=${city}`
        );
        const data = await result.json();
        return data;
      } catch (e) {
        return null;
      }
}

export default function CreateBillboardButton(props) {
  function handleButtonClick() {
    const enteredName = prompt("Please enter a unique name for your billboard");
    const enteredCity = prompt("Please enter a city name");

    if (enteredName !== null && enteredCity !== null) {
      var errorText = null;
      // Validate input
      if (enteredName === "")
        errorText = "You must enter a unique name for your billboard.";
      if (enteredCity === "")
        errorText = "You must enter a city for your billboard.";

      // if error:
      if (errorText !== null) alert("Error: " + errorText);

      // if Valid:
      props.onButtonPressed(enteredName, enteredCity);
    }
  }

  return (
    <div className="createBillboard-container">
      <button className="createBillboard-button" onClick={handleButtonClick}>
        Enter
      </button>
    </div>
  );
}
