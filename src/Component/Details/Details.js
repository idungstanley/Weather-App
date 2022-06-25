import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
 const data = useSelector(state=> state.airPollution);
 console.log(data);
 return (
  <section>

  </section>
 )
}

export default Details