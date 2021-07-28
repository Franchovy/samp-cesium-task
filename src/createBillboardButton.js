import styles from "./App.css";

import Billboards from './billboards';

export async function fetchCityCoordinates(city) {
  try {
    const result = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
    );
    const data = await result.json();
    
    if (data.length === 0) {
      // No match
      return {"error": {"message": "no match found"}};
    }

    const coords = {
      latitude: parseFloat(data[0].lat), 
      longitude: parseFloat(data[0].lon)
    };
    
    return {"error": null, coords: coords};
  } catch (e) {

    console.log(`Other error: ${e.json()}`);
    // Other error occured
    return {"error": {"message": e.message}};
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

  /** Function to be called to handle click 
   /* Accept input from user through prompts
   /* Validate input 
   /* @return billboard info
  */
  async function handleButtonClick() {
    
    // Input prompts for user
    const enteredName = prompt("Please enter a unique name for your billboard");
    if (enteredName === null) return; // Do not continue prompt on cancel.
    
    const enteredCity = prompt("Please enter a city name");
    if (enteredCity === null) return; // Do not continue prompt on cancel.

    
    if (enteredName !== null && enteredCity !== null) {
      var error;

      // Validate input: One or more fields are empty
      if (enteredName === "")
        error = { "error": {"message": "You must enter a unique name for your billboard.", "code": "EMPTY_FIELD"}};
      if (enteredCity === "")
        error = { "error": {"message": "You must enter a city for your billboard.", "code": "EMPTY_FIELD"}};
        
      // Check for error: Name not unique
      if (!props.checkNameUnique(enteredName)) {
        error = { "error": {"message": "The name for your billboard must be unique.", "code": "NAME_NOT_UNIQUE"}};
      }

      // Fetch city coordinates
      var fetchCityResult = await fetchCityCoordinates(enteredCity);
      console.log(`Result: ${JSON.stringify(fetchCityResult)}`);
      
      if (fetchCityResult.error !== null) {
        if (fetchCityResult.error.message === "no match found") {
          error = { "error": {"message": "No match found for the city you entered.", "code": "CITY_NOT_FOUND"}};
        } else {
          error = {"error": {"message": fetchCityResult.error.message, "code": "OTHER_ERROR"}};
        }
      }

      // If error occurred, alert and return
      if (error) {
        console.log(`Error: ${JSON.stringify(error)}`);
        props.onButtonPressed(error);
        return;
      }
      
      // Else 
      // Process result into data for billboard
      props.onButtonPressed(
        {
          uid: enteredName,
          city: toTitleCase(enteredCity), 
          coords: fetchCityResult.coords
        });
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
