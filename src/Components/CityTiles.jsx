import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { getBackgroundImage } from './getBackgroundImage';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Modal from 'react-bootstrap/Modal';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CityTiles({
  cities,
  defaultCities,
  removeCity,
  addDefaultCity,
  removeDefaultCity,
}) {
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null); // State for the selected city
  const [showModal, setShowModal] = useState(false); // State for the modal visibility

  // Handle checkbox change for setting/removing default city
  const handleCheckboxChange = (cityName) => {
    setSelectedCities((prevSelected) => {
      if (prevSelected.includes(cityName)) {
        removeDefaultCity(cityName);
        return prevSelected.filter((name) => name !== cityName);
      } else {
        addDefaultCity(cityName);
        return [...prevSelected, cityName];
      }
    });
  };

  // Filter out 3-day forecast data
  function get3DayForecast(city) {
    const forecastData = [];
    const uniqueDates = new Set();

    for (let i = 0; i < city.list.length; i++) {
      const forecast = city.list[i];
      const forecastDate = new Date(forecast.dt * 1000);
      const dateString = forecastDate.toISOString().split('T')[0];

      if (!uniqueDates.has(dateString)) {
        uniqueDates.add(dateString);
        forecastData.push({
          day: dateString,
          temp: Math.round(forecast.main.temp),
        });

        if (forecastData.length === 3) break;
      }
    }

    return forecastData;
  }

  // Handle city removal with confirmation
  const confirmRemoveCity = (city) => {
    const cityName = city?.city?.name || 'Unknown';
    const isConfirmed = window.confirm(`Are you sure you want to remove ${cityName}?`);
    if (isConfirmed) {
      removeCity(city.city.id);
    }
  };

  // Handle selecting a city for the graph
  const handleSelectCity = (city) => {
    setSelectedCity(city); // Set the selected city for graph
    setShowModal(true); // Show the modal when a city is selected
  };

  // Prepare data for the temperature graph
  const prepareGraphData = (city) => {
    const forecast = get3DayForecast(city);
    const labels = forecast.map((day) => day.day);
    const temperatures = forecast.map((day) => day.temp);

    return {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (°F)',
          data: temperatures,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    };
  };

  // Close the modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cities.map((city) => {
          const name = city?.city?.name || 'Unknown';
          const temp = city.list[0]?.main?.temp !== undefined ? Math.round(city.list[0].main.temp) : 'N/A';
          const description = city.list[0]?.weather[0]?.description || 'N/A';
          const highTemp = Math.round(city.list[0].main.temp_max);
          const lowTemp = Math.round(city.list[0].main.temp_min);
          const humidity = city.list[0]?.main?.humidity || 'N/A';
          const windSpeed = city.list[0]?.wind?.speed || 'N/A';

          const forecast = get3DayForecast(city);
          const bgImage = getBackgroundImage(description);

          return (
            <Col key={city.city.id}>
              <Card
                className="h-100 on-hover-scale "
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="over-lay"></div>
                <Card.Body>
                  <Card.Title className="text-center">{name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-center">
                    {temp !== 'N/A' ? `${temp}°F` : 'N/A'}
                  </Card.Subtitle>
                  <Card.Text className="text-center city-temp-info">
                    <div>{description}</div>
                    <div>High: {highTemp}°F</div>
                    <div>Low: {lowTemp}°F</div>
                    <div>Humidity: {humidity}%</div>
                    <div>Wind: {windSpeed} mph</div>
                   
                  </Card.Text>

                  <div className="text-center">
                    <Button className="me-2 remove-btn" onClick={() => confirmRemoveCity(city)}>
                      <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32">
                        <path d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.961 12.209c0.244-0.244 0.244-0.641 0-0.885l-1.328-1.327c-0.244-0.244-0.641-0.244-0.885 0l-3.761 3.761-3.761-3.761c-0.244-0.244-0.641-0.244-0.885 0l-1.328 1.327c-0.244 0.244-0.244 0.641 0 0.885l3.762 3.762-3.762 3.76c-0.244 0.244-0.244 0.641 0 0.885l1.328 1.328c0.244 0.244 0.641 0.244 0.885 0l3.761-3.762 3.761 3.762c0.244 0.244 0.641 0.244 0.885 0l1.328-1.328c0.244-0.244 0.244-0.641 0-0.885l-3.762-3.76 3.762-3.762z"></path>
                      </svg>
                    </Button>
                    <Button className="grape-btn" onClick={() => handleSelectCity(city)}>Next 3 Days</Button>
                    <div className="d-flex justify-content-center align-items-center select-default-city">
                      <input
                        type="checkbox"
                        checked={defaultCities.includes(name)}
                        onChange={() => handleCheckboxChange(name)}
                        className="me-2"
                      />
                      <span>{defaultCities.includes(name) ? 'Default City' : 'Not Default City'}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Modal for displaying temperature trend */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Temperature Trend for {selectedCity?.city?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCity && <Line data={prepareGraphData(selectedCity)} />}
        </Modal.Body>
      </Modal>
    </div>
  );
}
