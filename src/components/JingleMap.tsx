"use client";

import React, { useRef, useEffect, useState, use } from "react";
import mapboxgl, { Map, Marker } from "mapbox-gl";
import axios from "axios";

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./JingleMap.module.css";
import CountryCountdown from "./CountryCountdown";
import { TRADITION_DATA, Tradition } from "@/lib/data";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFybmVzbG93IiwiYSI6ImNsMGUyeHV6MDBmMGYzanBybDIyZ3BvOTQifQ.orwWz3XDibvdJSe_tfAxEA";

const secondsPerRevolution = 120;
// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;

let userInteracting = false;
let spinEnabled = true;

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
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState<number>(-90);
  const [lat, setLat] = useState<number>(40);
  const [zoom, setZoom] = useState<number>(1);
  const [countryApiData, setCountryApiData] = useState();

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/outdoors-v12",
      projection: {
        name: "globe",
      },
      center: [lng, lat],
      zoom: zoom,
    });

    TRADITION_DATA.forEach((country) => {
      new mapboxgl.Marker({ color: "red" })
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
      setCountryApiData(data);

      if (!map.current) return;
      map.current.flyTo({
        center: [lng, lat],
        zoom: 3,
        essential: true,
      });
    });
  }, [lng, lat, zoom]);

  return (
    <div>
      <div ref={mapContainer} className={styles["map-container"]} />
      <CountryCountdown
        geoCodeData={countryApiData?.geoCodeData}
        timezoneData={countryApiData?.timezoneData}
      />
    </div>
  );
};

export default JingleMap;

// function spinGlobe() {
//   if (!map.current) return;

//   const zoom = map.current.getZoom();

//   if (spinEnabled && !userInteracting && zoom! < maxSpinZoom) {
//     let distancePerSecond = 360 / secondsPerRevolution;

//     if (zoom! > slowSpinZoom) {
//       // Slow spinning at higher zooms
//       const zoomDif = (maxSpinZoom - zoom!) / (maxSpinZoom - slowSpinZoom);
//       distancePerSecond *= zoomDif;
//     }

//     const center = map.current.getCenter();
//     center.lng -= distancePerSecond;

//     // Smoothly animate the map over one second.
//     // When this animation is complete, it calls a 'moveend' event.
//     map.current.easeTo({ center, duration: 1000, easing: (n) => n });
//   }
// }

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
