import { Link, Outlet } from 'react-router-dom';

import './cities.css'

const Cities = ({ cities }) => (
  <div className='cities-list'>
    {cities.length === 0 ? (
      <h2>No cities added.</h2>
    ) : (
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <Link to={`/cities/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    )}
    <Outlet />
  </div>
);

export default Cities;