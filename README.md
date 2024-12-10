# 🌦️ Weather Dashboard App

Check out my Portfolio

## Table of Contents
- Introduction
- Technologies Used
- Features
- Challenges
- Installation
- Build and Deploy
- License

## Introduction
The Weather Dashboard App is a web application built with React.js that allows users to search for and view current weather conditions for up to five cities at a time. The app displays detailed information, including the current temperature, weather conditions (sunny, cloudy, rainy, etc.), high and low temperatures, and a 3-day forecast for each city. Users can also add new cities to the dashboard and remove existing ones.

This application is designed to be responsive, making it accessible on both desktop and mobile devices. It handles API requests to OpenWeather for weather data, and includes error handling in case the API fails.

## Technologies Used
- JavaScript
- React.js
- JSX
- React-Bootstrap
- CSS
- Axios
- GitHub
- Vite

<p align="left">
  <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
  <a href="https://axios-http.com/docs/intro"> <img src="https://axios-http.com/assets/logo.svg" alt="Axios" width="55" height="55"/></a>
</p>

### APIs:
- OpenWeather API

## Features
- Displays weather data for five cities at a time, showing:
  - Current temperature
  - Weather conditions (sunny, cloudy, rainy, etc.)
  - High and low temperatures for the day
  - 3-day forecast for each city
- Search function to add a new city to the dashboard.
- Remove cities from the dashboard.
- Temperature trend graph showing the 3-day forecast for a selected city.
- Responsive design for both desktop and mobile devices.
- Error handling for API requests to ensure stability.

## Challenges
- Integrating API data seamlessly into the dashboard layout.
- Managing local storage to persist weather data across sessions.
- Implementing a user-friendly UI while displaying multiple cities and weather information dynamically.
- Handling errors in case of API failures or invalid user input.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard

2. Install the project dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Access the application in your web browser at http://localhost:5173

## Build and Deploy
To build the project for deployment, use the following command:
npm run build

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.


### LICENSE.md Example (MIT License)

```markdown
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



