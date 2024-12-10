import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import CityTiles from './CityTiles.jsx';

const INITIAL_DEFAULT_CITIES = ['Delhi', 'Chennai', 'Ahmedabad', 'Kochi', 'Kolkata'];
const API_KEY = 'c32b649490f1417ec2b6d663c05a1a21';

export default function Dashboard() {
  const [cities, setCities] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [defaultCities, setDefaultCities] = useState(INITIAL_DEFAULT_CITIES);

  // Load cities and defaultCities from localStorage or fetch defaults
  useEffect(() => {
    let storedCities = [];
    let storedDefaults = [];
  
    // Safely parse cities from localStorage
    const citiesFromStorage = localStorage.getItem('cities');
    if (citiesFromStorage) {
      try {
        storedCities = JSON.parse(citiesFromStorage);
      } catch (error) {
        console.error('Invalid JSON for cities in localStorage:', error);
      }
    }
  
    // Check what's in localStorage for cities
    // console.log('Cities from localStorage:', storedCities);
  
    // Safely parse defaultCities from localStorage
    const defaultsFromStorage = localStorage.getItem('defaultCities');
    if (defaultsFromStorage) {
      try {
        storedDefaults = JSON.parse(defaultsFromStorage);
      } catch (error) {
        console.error('Invalid JSON for defaultCities in localStorage:', error);
      }
    }
  
    // Check what's in localStorage for defaultCities
    // console.log('Default Cities from localStorage:', storedDefaults);
  
    setDefaultCities(storedDefaults.length > 0 ? storedDefaults : INITIAL_DEFAULT_CITIES);
  
    if (storedCities.length > 0) {
      setCities(storedCities);
    } else {
      fetchDefaultCities(INITIAL_DEFAULT_CITIES);
    }
  }, []);
  

  // Save cities to localStorage whenever they change
  useEffect(() => {
    if (cities.length > 0) {
      localStorage.setItem('cities', JSON.stringify(cities));
    }
  }, [cities]);

  // Save defaultCities to localStorage whenever they change
  useEffect(() => {
    if (defaultCities.length > 0) {
      localStorage.setItem('defaultCities', JSON.stringify(defaultCities));
    }
  }, [defaultCities]);

  // Fetch weather data for city names
  async function fetchDefaultCities(cityNames) {
    if (!cityNames || cityNames.length === 0) return;

    const cityData = await Promise.all(
      cityNames.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`
        );
        return await response.json();
      })
    );
    setCities(cityData);
  }

  // Add a new city to the list
  async function addCity(cityName) {
    const normalizedName = cityName.trim();
    if (!normalizedName || cities.some((c) => c.city.name.toLowerCase() === normalizedName.toLowerCase())) {
      alert('City already exists or is invalid!');
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${normalizedName}&appid=${API_KEY}&units=imperial`
      );
      const cityData = await response.json();
      if (cityData.cod === "200") {
        setCities((prev) => [...prev, cityData]);
      } else {
        alert('City not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching city weather:', error);
    }
  }

  // Remove a city from the list
  function removeCity(cityId) {
    setCities((prev) => prev.filter((city) => city.city.id !== cityId));
  }

  // Add a city to the default list
  function addDefaultCity(cityName) {
    if (!defaultCities.includes(cityName)) {
      setDefaultCities((prev) => [...prev, cityName]);
    }
  }

  // Remove a city from the default list
  function removeDefaultCity(cityName) {
    setDefaultCities((prev) => prev.filter((defaultCity) => defaultCity !== cityName));
  }

  // Handle searching for a city
  async function handleSearch(e) {
    e.preventDefault();
    if (!searchInput.trim()) return;
    await addCity(searchInput.trim());
    setSearchInput(''); // Clear search input
  }

  function updateCityOrder(reorderedCities) {
    setCities(reorderedCities);
    localStorage.setItem('cities', JSON.stringify(reorderedCities));
  }
  

  return (
    <div>
      <div></div>
      <h1 className="bold dashboard-title">Weather Dashboard</h1>

      {/* Search Bar */}
      <Form className="d-flex justify-content-center mb-4" onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Search for a city"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="me-2 search-box"
        />
        <Button type="submit" className="search-btn">
          <svg fill="#000000" height="18px" width="18px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 490.4 490.4" xmlSpace="preserve">
            <g>
              <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
                s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
                M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"/>
            </g>
          </svg>
        </Button>
      </Form>

      {/* City Tiles */}
      <Container className="mb-3" fluid={true}>
        <CityTiles
          cities={cities}
          defaultCities={defaultCities}
          removeCity={removeCity}
          addDefaultCity={addDefaultCity}
          removeDefaultCity={removeDefaultCity}
          updateCityOrder={updateCityOrder}
        />
      </Container>

  
    </div>
  );
}
