import React from 'react';
import Search from '../Component/Search/Search';
import getCountryData from '../service/ApiRequest';

const Home = () => (
  <>
    <div>Testing routes</div>
    <Search />
  </>
);
getCountryData();

export default Home;
