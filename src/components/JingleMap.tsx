"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Map, Marker } from "mapbox-gl";
import axios from "axios";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";

import { z } from "zod";

const INITIAL_DATA = {
  geoCodeData: [
    [
      {
        long_name: "Ireland",
        short_name: "IE",
        types: ["country", "political"],
      },
    ],
  ],
  timeZoneData: {
    dstOffset: 0,
    rawOffset: 0,
    status: "OK",
    timeZoneId: "Europe/Dublin",
    timeZoneName: "Greenwich Mean Time",
  },
};

const timeZoneDataSchema = z.object({
  dstOffset: z.number(),
  rawOffset: z.number(),
  status: z.string(),
  timeZoneId: z.string(),
  timeZoneName: z.string(),
});

const addressComponentSchema = z.object({
  long_name: z.string(),
  short_name: z.string(),
  types: z.array(z.string()),
});

const geoCodeDataArraySchema = z.array(z.array(addressComponentSchema));

const fetchGoogleApiResponseSchema = z.object({
  timeZoneData: timeZoneDataSchema,
  geoCodeData: geoCodeDataArraySchema,
});

export type GeoCodeAddress = z.infer<typeof addressComponentSchema>;
export type GeoTimeAPIResponse = z.infer<typeof fetchGoogleApiResponseSchema>;
export type TimeZone = z.infer<typeof timeZoneDataSchema>;
export type GeoCodeAray = z.infer<typeof geoCodeDataArraySchema>;

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./JingleMap.module.css";
import CountryCountdown from "./CountryCountdown";
import { TRADITION_DATA } from "@/lib/data";
import MapButton from "./ui/MapButton";
import { getCurrentLocationLatLng } from "@/lib/geolocation";
import GlobalCountDown from "./GlobalCountDown";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFybmVzbG93IiwiYSI6ImNsMGUyeHV6MDBmMGYzanBybDIyZ3BvOTQifQ.orwWz3XDibvdJSe_tfAxEA";

async function fetchGoogleAPIHandler(lat: number, lng: number) {
  try {
    const { data } = await axios.post("/api", {
      lat,
      lng,
    });

    return data;
  } catch (error) {
    return error;
  }
}

const JingleMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map>();
  const [countryApiData, setCountryApiData] =
    useState<GeoTimeAPIResponse>(INITIAL_DATA);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/outdoors-v12",
      projection: {
        name: "globe",
      },
      center: [-90, -40],
      zoom: 1,
    });

    TRADITION_DATA.forEach((country) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = `url(${country.marker})`;

      if (!map.current) return;
      new Marker(el)
        .setLngLat(country.coords)
        .setPopup(
          new mapboxgl.Popup().setHTML(`<h3>${country.country}</h3>
        <p><strong>${country.celebration}</strong></p>`)
        )
        .addTo(map.current);
    });

    map.current.on("click", async (e) => {
      const { lng, lat } = e.lngLat;

      const data = await fetchGoogleAPIHandler(lat, lng);

      const validatedData = fetchGoogleApiResponseSchema.safeParse(data);

      if (!validatedData.success) {
        console.log(validatedData.error);
        return;
      }

      setCountryApiData(validatedData.data);

      if (!map.current) return;
      map.current.flyTo({
        center: [lng, lat],
        zoom: 3,
        essential: true,
      });
    });
  }, []);

  function playMusic() {
    setIsPlayingMusic((prev) => !prev);
    if (!audioRef.current) return;
    if (!isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }
  async function zoomToLatLng() {
    if (!map.current) return;

    const { lat, lng } = await getCurrentLocationLatLng();
    map.current.flyTo({
      center: [lng, lat],
      zoom: 3,
      essential: true,
    });
  }

  return (
    <div className="position-relative">
      <div ref={mapContainer} className={styles["map-container"]}>
        <div className="map-btn-container">
          {!isPlayingMusic ? (
            <MapButton
              className="map-btn"
              icon={<FaMusic />}
              onClick={playMusic}
            />
          ) : (
            <MapButton
              className="map-btn"
              icon={<FaPause />}
              onClick={playMusic}
            />
          )}
          <MapButton
            className="map-btn"
            icon={<FaLocationCrosshairs />}
            onClick={zoomToLatLng}
          />
        </div>
      </div>
      <GlobalCountDown />

      <CountryCountdown
        geoCodeData={countryApiData?.geoCodeData}
        timezoneData={countryApiData?.timeZoneData}
      />

      <audio
        ref={audioRef}
        controls
        src="/audio/christmas-music.mp3"
        className="hidden"
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

export default JingleMap;
