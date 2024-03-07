import axios from "axios";

export async function getCurrentLocationLatLng() {
  try {
    const position = await getCurrentLocation();
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    return { lat, lng };
  } catch (error) {
    alert("Unable to find location - default to Dublin");
    return { lat: 53.34, lng: -6.26 };
  }
}

export async function getCurrentLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error),
        { enableHighAccuracy: true, maximumAge: 10000 }
      );
    } else {
      reject(new Error("Geolocation is not supported by the browser."));
    }
  });
}

export async function getRestCountriesInformation(countryCode: string) {
  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching country information:", error);
    throw error;
  }
}
