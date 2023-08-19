import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Header from './components/header';
import Cities from './components/cities';
import AddCity from './components/add-city';
import CityDetails from './components/city-details';

import './App.css';

const App = () => {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities(prevCities => [...prevCities, city]);
  };

  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><NavLink to='/'>Cities</NavLink></li>
              <li><NavLink to='/add-city'>Add City</NavLink></li>
            </ul>
          </nav>
          <div>
            <Routes>
              <Route path='/' element={<Cities cities={cities} />}> 
                <Route path='cities/:id' element={<CityDetails cities={cities} />} />
              </Route>
              <Route path='/add-city' element={<AddCity onAddCity={addCity} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
