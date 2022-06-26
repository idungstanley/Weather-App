import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import useRegion from '../../hooks/useRegion';
import { getDetails } from '../../redux/Polution';
import './card.css';

const PerCountry = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { region } = useRegion();
  const handleClick = (lat, lon) => {
    dispatch(getDetails(lat, lon));
    navigate('/Countries');
  };
  return (region.map(
    ({
      id,
      countryName,
      population,
      maps,
      timezones,
      coatOfArms,
      continents,
      flags,
      lat,
      lon,
    }) => (
      <article className="card" key={id}>
        <div className="firstSection">
          <p className="countryName">{countryName}</p>
          <img
            src={coatOfArms === undefined ? flags : coatOfArms}
            alt=""
            className="coa"
          />
          <img src={flags} alt="" className="flags" />
        </div>
        <div className="secondSection">
          <BsFillArrowRightCircleFill onClick={() => handleClick(lat, lon)} />
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
    ),
  ));
};

// PerCountry.propTypes = {
//   countryName: PropTypes.string.isRequired,
//   population: PropTypes.string.isRequired,
//   maps: PropTypes.string.isRequired,
//   timezones: PropTypes.string.isRequired,
//   coatOfArms: PropTypes.string.isRequired,
//   continents: PropTypes.string.isRequired,
//   flags: PropTypes.string.isRequired,
//   lat: PropTypes.number.isRequired,
//   lon: PropTypes.number.isRequired,
// };
export default PerCountry;
