import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const { lat, lng } = body;

  const timezoneURL = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1331766000&key=${apiKey}`;

  const geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

  try {
    const [geoCodeResponse, timezoneResponse] = await Promise.all([
      axios.get(geoCodeURL),
      axios.get(timezoneURL),
    ]);

    if (!geoCodeResponse.data || !timezoneResponse.data) {
      throw new Error(`Data not available!`);
    }

    const geoCodeData = geoCodeResponse.data;
    const timezoneData = timezoneResponse.data;

    return Response.json({ geoCodeData, timezoneData });
  } catch (error) {
    return Response.error();
  }
}
