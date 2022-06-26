import React from 'react';
import PropTypes from 'prop-types';
import './search.css';
import PerCountry from '../Card/PerCountry';

const Search = ({ getvalue, onChange }) => (
  <form>
    <input
      className="search"
      type="search"
      placeholder="Search..."
      name=""
      id=""
      value={getvalue}
      onChange={onChange}
    />
    <PerCountry />
  </form>
);

Search.propTypes = {
  getvalue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Search;
