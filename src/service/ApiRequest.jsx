import FetchRequest from '../helpers/fetchRequest';

const key = 'a7e6bc5d2a0e058fb9241c6b008251ae';
export const countryName = 'London';
export const searchUrk = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&APPID=${key}`;
export const searchUrl = 'https://restcountries.com/v3.1/region/africa';
const getCountryData = async () => {
  const fetchData = new FetchRequest({ url: searchUrl });
  try {
    const searchResult = await fetchData.call();
    return searchResult;
  } catch (error) {
    throw new Error(error);
  }
};

export default getCountryData;
