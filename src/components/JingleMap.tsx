"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl, { Map, Marker } from "mapbox-gl";
import axios from "axios";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { z } from "zod";

const timeZoneDataSchema = z
  .object({
    dstOffset: z.number(),
    rawOffset: z.number(),
    status: z.string(),
    timeZoneId: z.string(),
    timeZoneName: z.string(),
  })
  .optional();

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

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./JingleMap.module.css";
import CountryCountdown from "./CountryCountdown";
import { TRADITION_DATA } from "@/lib/data";
import MapButton from "./ui/MapButton";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFybmVzbG93IiwiYSI6ImNsMGUyeHV6MDBmMGYzanBybDIyZ3BvOTQifQ.orwWz3XDibvdJSe_tfAxEA";

async function fetchGoogleAPIHandler(lat: number, lng: number) {
  try {
    const { data } = await axios.post("/api", {
      lat,
      lng,
    });

    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
}

const JingleMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState<number>(-90);
  const [lat, setLat] = useState<number>(40);
  const [zoom, setZoom] = useState<number>(1);
  const [countryApiData, setCountryApiData] = useState();
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/outdoors-v12",
      projection: {
        name: "globe",
      },
      center: [lng, lat],
      zoom: zoom,
    });

    TRADITION_DATA.forEach((country) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = `url(${country.marker})`;

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

      console.log(validatedData);
      // setCountryApiData(data);

      if (!map.current) return;
      map.current.flyTo({
        center: [lng, lat],
        zoom: 3,
        essential: true,
      });
    });
  }, [lng, lat, zoom]);

  function playMusic() {
    setIsPlayingMusic((prev) => !prev);
    if (!isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }
  async function zoomToLatLng() {
    const { lat, lng } = await getCurrentLocationLatLng();
    map.current.flyTo({
      center: [lng, lat],
      zoom: 3,
      essential: true,
    });
  }

  async function getCurrentLocationLatLng() {
    try {
      const position = (await getCurrentLocation()) as any;
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      return { lat, lng };
    } catch (error) {
      alert("Unable to find location - default to Dublin");
      return { lat: 53.34, lng: -6.26 };
    }
  }

  async function getCurrentLocation() {
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

  return (
    <div>
      <div ref={mapContainer} className={styles["map-container"]} />
      <CountryCountdown
        geoCodeData={countryApiData?.geoCodeData}
        timezoneData={countryApiData?.timezoneData}
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
  );
};

export default JingleMap;

// map.current.on("move", () => {
//   setLng(map.current!.getCenter().lng);
//   setLat(map.current!.getCenter().lat);
//   setZoom(map.current!.getZoom());
// });

// map.current.on("mousedown", () => {
//   userInteracting = true;
// });

// map.current.on("mouseup", () => {
//   userInteracting = false;
//   // spinGlobe();
// });

// map.current.on("dragend", () => {
//   userInteracting = false;
//   // spinGlobe();
// });

// map.current.on("pitchend", () => {
//   userInteracting = false;
//   // spinGlobe();
// });

// map.current.on("rotateend", () => {
//   userInteracting = false;
//   // spinGlobe();
// });

// map.current.on("moveend", () => {
//   // spinGlobe();
// });
