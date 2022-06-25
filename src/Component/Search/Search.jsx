import React from 'react';
import { MdOutlineLocationSearching } from 'react-icons/md';
import PerCountry from '../Card/PerCountry';

const Search = () => (
  <form>
    <input type="search" name="" id="" />
    <button type="submit">
      <MdOutlineLocationSearching />
    </button>
    <PerCountry />
  </form>
);

export default Search;
