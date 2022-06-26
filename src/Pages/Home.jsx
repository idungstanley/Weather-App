/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Search from "../Component/Search/Search";

const Home = () => {
const dispatch = useDispatch();
  const [getvalue, setGetvalue] = useState("");
  useEffect(() => {
    dispatch(searchCountryBy(getvalue));
  }, [getvalue]);

  const handleChange = (e) => {
    setGetvalue(e.target.value);
  };

  return (
    <>
      <div>Testing routes</div>
      <Search getvalue={getvalue} onChange={() => handleChange} />
    </>
  );
};

export default Home;
