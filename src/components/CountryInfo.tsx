import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import countryData from "@/lib/data.json";

interface CountryCountdownProps {
  geoCodeData: any;
  timezoneData: any;
}

const CountryCountdown: React.FC<CountryCountdownProps> = ({
  geoCodeData,
  timezoneData,
}) => {
  const [flagSrc, setFlagSrc] = useState("https://flagcdn.com/ie.svg");
  const [countryName, setCountryName] = useState("Ireland");
  const [countryText, setCountryText] = useState(
    "Choose a country and learn about their local celebrations!"
  );

  async function displayGeolocationData() {
    // ONLY WORKS WITH BACKEND
    const id = timezoneData.timeZoneId.split("/");

    const countryCodeResult = geoCodeData?.results.find((result: any) =>
      result.address_components.some((component: any) =>
        component.types.includes("country")
      )
    );

    const countryCode = countryCodeResult?.address_components.find(
      (component: any) => component.types.includes("country")
    )?.short_name;

    const countryInfoResponse = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const countryInfo = await countryInfoResponse.json();

    const flagSrc = countryInfo[0]?.flags?.svg;

    setFlagSrc(flagSrc);
    setCountryName(countryInfo[0]?.name?.common);

    const filteredCountry = countryData.filter(
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

  displayGeolocationData(geoCodeData, timezoneData);

  return (
    <section className="container">
      <Row className="text-center mt-1" id="country-counter-container">
        {/* Flag */}
        <Col xs={12} md={2}>
          <Image src={flagSrc} id="flag" alt="image of the Irish flag" />
        </Col>

        {/* Country Name */}
        <Col className="text-center" xs={12} md={4}>
          <div className="text-box">
            <h3 id="selectedCountry">{countryName}</h3>
            <p id="text-element">{countryText}</p>
          </div>
        </Col>

        {/* Timer */}
        <Col
          className="d-flex justify-content-center"
          xs={12}
          md={6}
          order={{ xs: "first", lg: "last" }}
        >
          <div className="d-flex flex-column timer-container">
            <div id="days" className="fw-bold m-1 px-3">
              20
            </div>
            <div className="m-1">Days</div>
          </div>
          <div className="d-flex flex-column timer-container mx-3">
            <div id="hours" className="fw-bold m-1 px-3">
              20
            </div>
            <div className="m-1">Hours</div>
          </div>
          <div className="d-flex flex-column timer-container">
            <div id="minutes" className="fw-bold m-1 px-3">
              20
            </div>
            <div className="m-1">Min</div>
          </div>
          <div className="d-flex flex-column timer-container mx-3">
            <div id="seconds" className="fw-bold m-1 px-3">
              20
            </div>
            <div className="m-1">Sec</div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default CountryCountdown;