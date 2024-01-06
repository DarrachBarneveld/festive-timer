import { FunctionComponent, useEffect, useRef, useState } from "react";
import { DateTime, DurationObjectUnits } from "luxon";
import { Col } from "react-bootstrap";

interface CountdownTimerProps {}

const CountdownTimer: FunctionComponent<CountdownTimerProps> = ({
  timeObj,
}) => {
  const [time, setTime] = useState<DurationObjectUnits | undefined>(timeObj);
  const timeRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDiff = getTimeDifference(timeObj[0], timeObj[1]);
      timeRef.current = timeDiff;
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function tick() {
    console.log(timeRef.current);
    setTime(timeRef.current);
  }

  return (
    <Col
      className="d-flex justify-content-center"
      xs={12}
      md={6}
      order={{ xs: "first", lg: "last" }}
    >
      <div className="d-flex flex-column timer-container">
        <div id="days" className="fw-bold m-1 px-3">
          {time?.days}
        </div>
        <div className="m-1">Days</div>
      </div>
      <div className="d-flex flex-column timer-container mx-3">
        <div id="hours" className="fw-bold m-1 px-3">
          {time?.hours}
        </div>
        <div className="m-1">Hours</div>
      </div>
      <div className="d-flex flex-column timer-container">
        <div id="minutes" className="fw-bold m-1 px-3">
          {time?.minutes}
        </div>
        <div className="m-1">Min</div>
      </div>
      <div className="d-flex flex-column timer-container mx-3">
        <div id="seconds" className="fw-bold m-1 px-3">
          {time?.seconds?.toFixed(0)}
        </div>
        <div className="m-1">Sec</div>
      </div>
    </Col>
  );
};

export default CountdownTimer;

/**
 * Returns local time based on list of time-zones as an object.
 * Example format for location "Pacific" or "ETC"
 * Example format for town "Honolulu" or "GMT+1"
 */
function getSpecificLocalTime(location, town) {
  let specificLocalTime = DateTime.local({ zone: `${location}/${town}` });
  return specificLocalTime;
}

/**
 * Pass a date as a string in a format YY-MM-DD
 * and location/town based on list of time-zones.
 * Example format for date "2020-01-12"
 * Example format for location: "Pacific" or "ETC"
 * Example format for town: "Honolulu" or GMT+1
 * Returns an object.
 **/
function getNewYearTimeISO(date, location, town) {
  return DateTime.fromISO(`${date}`, { zone: `${location}/${town}` });
}

/**
 * Returns a difference between location in specific time-zone from a new year as an object
 * in a form {days: days-value, hours: hours-value, minutes: minutes-value, seconds: seconds-value}.
 * Example format for location "Pacific" or "ETC".
 * Example format for town "Honolulu" or "GMT+1".
 */
function getTimeDifference(location, town) {
  let actualTime = getSpecificLocalTime(location, town);
  let newYearTime = getNewYearTimeISO(
    `${actualTime.year + 1}-01-01`,
    location,
    town
  );

  return newYearTime
    .diff(actualTime, ["days", "hours", "minutes", "seconds"])
    .toObject();
}
