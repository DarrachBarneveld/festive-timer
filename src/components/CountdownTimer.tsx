import { FunctionComponent, useEffect, useRef, useState } from "react";
import { DateTime, DurationObjectUnits } from "luxon";
import { Col } from "react-bootstrap";

interface CountdownTimerProps {
  timeObj: string[];
  lg?: boolean;
}

const CountdownTimer: FunctionComponent<CountdownTimerProps> = ({
  timeObj,
  lg,
}) => {
  const [time, setTime] = useState<DurationObjectUnits | undefined>();
  const timeRef = useRef<DurationObjectUnits | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDiff = getTimeDifference(timeObj[0], timeObj[1]);
      timeRef.current = timeDiff;
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeObj]);

  function tick() {
    setTime(timeRef.current);
  }

  return (
    <Col className="grid-container order-1 order-sm-2 order-md-3">
      <div className="timer-container">
        <h3 className={`fw-bold m-1 px-1 px-lg-3 ${lg && "lg-counter"}`}>
          {time?.days}
        </h3>
        <p className={`${!lg && "my-1"}`}>Days</p>
      </div>
      <div className=" timer-container">
        <h3 className={`fw-bold m-1 px-1 px-lg-3 ${lg && "lg-counter"}`}>
          {time?.hours}
        </h3>
        <p className={`${!lg && "my-1"}`}>Hours</p>
      </div>
      <div className="timer-container">
        <h3 className={`fw-bold m-1 px-1 px-lg-3 ${lg && "lg-counter"}`}>
          {time?.minutes}
        </h3>
        <p className={`${!lg && "my-1"}`}>Mins</p>
      </div>
      <div className=" timer-container">
        <h3 className={`fw-bold m-1 px-1 px-lg-3 ${lg && "lg-counter"}`}>
          {time?.seconds?.toFixed(0)}
        </h3>
        <p className={`${!lg && "my-1"}`}>Secs</p>
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
function getSpecificLocalTime(location: string, town: string) {
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
function getNewYearTimeISO(date: string, location: string, town: string) {
  return DateTime.fromISO(`${date}`, { zone: `${location}/${town}` });
}

/**
 * Returns a difference between location in specific time-zone from a new year as an object
 * in a form {days: days-value, hours: hours-value, minutes: minutes-value, seconds: seconds-value}.
 * Example format for location "Pacific" or "ETC".
 * Example format for town "Honolulu" or "GMT+1".
 */
function getTimeDifference(location: string, town: string) {
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
