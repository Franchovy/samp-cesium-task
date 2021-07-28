import styles from "./App.css";

export async function fetchCityCoordinates(city) {
  try {
    const result = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
    );
    const data = await result.json();
    
    const coords = {
      latitude: parseFloat(data[0].lat), 
      longitude: parseFloat(data[0].lon)
    };
    console.log(`Coordinates: ${coords}`);
    return (coords);
  } catch (e) {
    return null;
  }
}

function toTitleCase(str) {
  return str.replace(
    /(\w*\W*|\w*)\s*/g,
    function(txt) {
    return(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }
  ); 
}

export default function CreateBillboardButton(props) {
  async function handleButtonClick() {
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
      var result = await fetchCityCoordinates(enteredCity);
      if (result != null) {
        props.onButtonPressed(
          {
            uid: enteredName,
            city: toTitleCase(enteredCity), 
            coords: result});
      } else {
        props.onButtonPressed({"error": "No city found for this name."});
      }
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
