import { useParams } from "react-router-dom"

import './city-details.css'

const CityDetails = ({ cities }) => {
  const { id } = useParams();
  const city = cities.find(city => city.id.toString() === id);

  return (
    <div className="city-details">
      <h2>{city.name}</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population.toString()}</p>
    </div>
  );
}

export default CityDetails;