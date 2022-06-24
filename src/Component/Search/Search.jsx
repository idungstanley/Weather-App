import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineLocationSearching } from 'react-icons/md';
import { loadApiData } from '../../redux/SearchApi';
import DisplayCountry from '../Country/DisplayCountry';

const Search = () => {
  const dispatch = useDispatch();
  const regionData = useSelector((state) => state.ApiReducer);
  useEffect(() => {
    if (regionData.length === 0) {
      dispatch(loadApiData());
    }
  });
  return (
    <form>
      <input type="search" name="" id="" />
      <button type="submit">
        <MdOutlineLocationSearching />
      </button>
      <DisplayCountry />
    </form>
  );
};

export default Search;
