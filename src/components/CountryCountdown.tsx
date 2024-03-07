import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import CountdownTimer from "./CountdownTimer";
import { GeoCodeAray, TimeZone } from "./JingleMap";
import { getRestCountriesInformation } from "@/lib/geolocation";
import { TRADITION_DATA } from "@/lib/data";

interface CountryCountdownProps {
  geoCodeData: GeoCodeAray;
  timezoneData: TimeZone;
}

const CountryCountdown: React.FC<CountryCountdownProps> = ({
  geoCodeData,
  timezoneData,
}) => {
  const [flagSrc, setFlagSrc] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_with_question_mark.svg/2560px-Flag_with_question_mark.svg.png"
  );
  const [countryName, setCountryName] = useState("Select A Country");
  const [countryText, setCountryText] = useState(
    "Choose a country and learn about their local celebrations!"
  );
  const [time, setTime] = useState<string[]>();

  useEffect(() => {
    if (!geoCodeData || !timezoneData) return;
    displayGeolocationData();
  }, [geoCodeData, timezoneData]);

  async function displayGeolocationData() {
    // ONLY WORKS WITH BACKEND
    const id = timezoneData.timeZoneId.split("/");
    setTime(id);

    const countryCode = geoCodeData
      .flatMap((result) => result)
      .find((result) => result.types.includes("country"))?.short_name;

    if (!countryCode) return;
    const countryInfo = await getRestCountriesInformation(countryCode);

    const flagSrc = countryInfo[0]?.flags?.svg;

    setFlagSrc(flagSrc);
    setCountryName(countryInfo[0]?.name?.common);

    const filteredCountry = TRADITION_DATA.filter(
      (country) => country.country === countryInfo[0]?.name?.common
    );

    if (filteredCountry && filteredCountry.length > 0) {
      setCountryText(filteredCountry[0].activity);
    } else {
      setCountryText(
        `Know how people in ${countryInfo[0]?.name?.common} celebrate NYE? Please let us know so we can update our map and share it with the world! `
      );
    }
  }

  return (
    <section className="container">
      <Row className="text-center mt-1" id="country-counter-container">
        <Col xs={12} md={2} className="order-2 order-sm-3 order-md-1">
          <Image src={flagSrc} id="flag" alt="image of the Irish flag" />
        </Col>

        <Col
          className="text-center order-3 order-sm-3 order-md-2"
          xs={12}
          md={4}
        >
          <div className="text-box">
            <h3 id="selectedCountry">{countryName}</h3>
            <p id="text-element">{countryText}</p>
          </div>
        </Col>

        {time && <CountdownTimer timeObj={time} lg />}
      </Row>
    </section>
  );
};

export default CountryCountdown;
