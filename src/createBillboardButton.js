import styles from "./App.css";

import fetchCityCoordinates from "./utilities/fetchCityCoordinates";
import toTitleCase from "./utilities/stringFormatter";

/**
 * Button Component function to add more billboards to the viewer.
 * Onclick, prompt user input for *unique identifier* and *city name*
 *
 * @props
 * *checkNameUnique* - validator function for identifier/name uniqueness
 * *onButtonPressed* - callback for when a new billboard is submitted (or error).
 */
export default function CreateBillboardButton(props) {

  /** Callback to be called to handle click
   * Accept input from user through prompts,
   * validate input according to rules,
   * @return *billboard data* or *error*
   * {
   *  uid,
   *  city,
   *  coords:
   *      {
   *      latitude,
   *      longitude
   *      },
   *  error:
   *      {
   *      message,
   *      code
   *      }
   * }
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
        error = {
          error: {
            message: "You must enter a unique name for your billboard.",
            code: "EMPTY_FIELD",
          },
        };
      if (enteredCity === "")
        error = {
          error: {
            message: "You must enter a city for your billboard.",
            code: "EMPTY_FIELD",
          },
        };

      // Check for error: Name not unique
      if (!props.checkNameUnique(enteredName)) {
        error = {
          error: {
            message: "The name for your billboard must be unique.",
            code: "NAME_NOT_UNIQUE",
          },
        };
      }

      // Fetch city coordinates
      var fetchCityResult = await fetchCityCoordinates(enteredCity);

      if (fetchCityResult.error !== null) {
        if (fetchCityResult.error.message === "no match found") {
          error = {
            error: {
              message: "No match found for the city you entered.",
              code: "CITY_NOT_FOUND",
            },
          };
        } else {
          error = {
            error: {
              message: fetchCityResult.error.message,
              code: "OTHER_ERROR",
            },
          };
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
      props.onButtonPressed({
        uid: enteredName,
        city: toTitleCase(enteredCity),
        coords: fetchCityResult.coords,
      });
    }
  }

  return (
    <button className="createBillboard-button" onClick={handleButtonClick}>
      Create Billboard
    </button>
  );
}
