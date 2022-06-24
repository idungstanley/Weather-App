import React from 'react';
import PerCountry from '../Card/PerCountry';
import useRegion from '../../hooks/useRegion';

const DisplayCountry = () => {
  const { region } = useRegion();

  return (
    <section>
      {region.map((eachCountry) => (
        <PerCountry
          key={eachCountry.population}
          countryName={eachCountry.countryName}
          population={eachCountry.population}
          maps={eachCountry.maps}
          timezones={eachCountry.timezones}
          coatOfArms={eachCountry.coatOfArms}
          continents={eachCountry.continents}
          flags={eachCountry.flags}
        />
      ))}
    </section>
  );
};

export default DisplayCountry;
