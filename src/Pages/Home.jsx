/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../redux/SearchApi";
import Search from "../Component/Search/Search";
import './home.css'

const Home = () => {
const dispatch = useDispatch();
  const [getvalue, setGetvalue] = useState("");
  useEffect(() => {
    dispatch(searchCountry(getvalue));
  }, [getvalue]);

  const handleChange = (e) => {
    setGetvalue(e.target.value);
  };

  return (
    <main>
      <Search getvalue={getvalue} onChange={(e) => handleChange(e)} />
    </main>
  );
};

export default Home;
