/*eslint-disable*/

import React from "react";
import PropTypes from "prop-types";
import { MdOutlineLocationSearching } from "react-icons/md";
import PerCountry from "../Card/PerCountry";

const Search = ({ getvalue, onChange }) => (
  <form>
    <input type="search" name="" id="" value={getvalue} onChange={onChange} />
    <button type="submit">
      <MdOutlineLocationSearching />
    </button>
    <PerCountry />
  </form>
);

Search.propTypes = {
  getvalue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Search;
