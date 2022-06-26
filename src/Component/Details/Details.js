/*eslint-disable*/
import React from "react";
import { useSelector } from "react-redux";
import { BiCaretLeft } from "react-icons/bi";

const Details = () => {
  const data = useSelector((state) => state.airPollution);
  const {
    carbon,
    nitrogen,
    nitrogenO,
    ozone,
    sp,
    suspendedP,
    sulphur,
    ammonia,
  } = data;
  return (
    <>
      <BiCaretLeft />
      <header>
        <h2>Pollutant components</h2>
      </header>
      <article>
        <div>
          <p> Carbon monoxide (CO)</p>
          <p>{carbon}</p>
        </div>
        <div>
          <p> Nitrogen monoxide (NO)</p>
          <p>{nitrogenO}</p>
        </div>
        <div>
          <p> Nitrogen dioxide (NO2)</p>
          <p>{nitrogen}</p>
        </div>
        <div>
          <p> Ozone (O3)</p>
          <p>{ozone}</p>
        </div>
        <div>
          <p> Sulphur dioxide (SO2)</p>
          <p>{sulphur}</p>
        </div>
        <div>
          <p> Suspended Particles (Pm2.5)</p>
          <p>{sp}</p>
        </div>
        <div>
          <p> Suspended Particles (Pm10)</p>
          <p>{suspendedP}</p>
        </div>
        <div>
          <p> Ammonia (NH3)</p>
          <p>{ammonia}</p>
        </div>
      </article>
    </>
  );
};

export default Details;
