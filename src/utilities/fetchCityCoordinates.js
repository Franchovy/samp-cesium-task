export default async function fetchCityCoordinates(city) {
  try {
    const result = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
    );
    const data = await result.json();

    if (data.length === 0) {
      // No match
      return { error: { message: "no match found" } };
    }

    const coords = {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };

    return { error: null, coords: coords };
  } catch (e) {
    // Other error occured
    return { error: { message: e.message } };
  }
}
