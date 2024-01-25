import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function Topbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(dayjs().format("dddd,MMMM D YYYY,hh:mm:ss A"));
    });
  }, []);

  return (
    <>
      <div className="bg-light">
        <div className="container">
          <h4>{currentTime}</h4>
        </div>
      </div>
    </>
  );
}
