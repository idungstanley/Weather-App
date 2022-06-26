/*eslint-disable*/
import React from "react";
import { useSelector } from "react-redux";
import { BiCaretLeft } from "react-icons/bi";

const Details = () => {
  const data = useSelector((state) => state.airPollution);
  const { components } = data;
  console.log(components);
  // return (
  //   <>
  //     <BiCaretLeft />
  //     <header>
  //       <h2>Pollutant components</h2>
  //     </header>
  //     <article>
  //       <div>
  //         <p> Carbon monoxide (CO)</p>
  //         <p>{components.co}</p>
  //       </div>
  //       <div>
  //         <p> Nitrogen monoxide (NO)</p>
  //         <p>{components.no}</p>
  //       </div>
  //       <div>
  //         <p> Nitrogen dioxide (NO2)</p>
  //         <p>{components.no2}</p>
  //       </div>
  //       <div>
  //         <p> Ozone (O3)</p>
  //         <p>{components.o3}</p>
  //       </div>
  //       <div>
  //         <p> Sulphur dioxide (SO2)</p>
  //         <p>{components.so2}</p>
  //       </div>
  //       <div>
  //         <p> Suspended Particles (Pm2.5)</p>
  //         <p>{components.pm2_5}</p>
  //       </div>
  //       <div>
  //         <p> Suspended Particles (Pm10)</p>
  //         <p>{components.pm10}</p>
  //       </div>
  //       <div>
  //         <p> Ammonia (NH3)</p>
  //         <p>{components.nh3}</p>
  //       </div>
  //     </article>
  //   </>
  // );
};

export default Details;
