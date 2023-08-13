import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './add-city.css'

const AddCity = ({ onAddCity }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    population: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCity = {
      id: Date.now(),
      name: formData.name,
      country: formData.country,
      population: Number(formData.population)
    }
    onAddCity(newCity);
    navigate('/');
  };

  return (
    <div className="add-city-form">
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">City Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input 
            type="text" 
            id="country" 
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="population">Population:</label>
          <input 
            type="number" 
            id="population" 
            name="population"
            value={formData.population}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
