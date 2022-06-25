import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loadApiData, getDetails } from '../redux/SearchApi'

const useRegion = () => {
  const dispatch = useDispatch()
  const region = useSelector((state) => state.ApiReducer)
  useEffect(() => {
    if (region.length === 0) {
      dispatch(loadApiData())
    }
  })

  const handleClick = (id, lat, lon) => {
    console.log(id)
    dispatch(getDetails(id, lat, lon))
  }
  return { region, handleClick }
}

export default useRegion
