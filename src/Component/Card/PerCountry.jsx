import React from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './card.css';

const PerCountry = ({
  countryName,
  population,
  maps,
  timezones,
  coatOfArms,
  continents,
  flags,
}) => (
  <article className="card">
    <div className="firstSection">
      <p className="countryName">{countryName}</p>
      <img src={flags} alt="" className="flags" />
    </div>
    <div className="secondSection">
      <img src={coatOfArms === {} ? flags : coatOfArms} alt="" className="coa" />
      <BsFillArrowRightCircleFill />
      <p>
        Population:
        {population}
      </p>
      <p>{timezones}</p>
      <p>{continents}</p>
      <button type="button">
        <a href={maps} target="_blank" rel="noreferrer">
          View map
        </a>
      </button>
    </div>
  </article>
);

PerCountry.propTypes = {
  countryName: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  maps: PropTypes.string.isRequired,
  timezones: PropTypes.string.isRequired,
  coatOfArms: PropTypes.string.isRequired,
  continents: PropTypes.string.isRequired,
  flags: PropTypes.string.isRequired,
};
export default PerCountry;
