# Weather App

## Description
This project is a simple weather application that fetches weather data from the OpenWeatherMap API and displays it to the user. The application shows the current temperature, weather description, location, and additional details such as feels-like temperature and humidity.

## Project Structure
The project consists of the following files:

- **index.html**: Contains the HTML structure of the weather application, including elements for the title, weather icon, temperature, description, location, and details like feels-like temperature and humidity. It references the CSS file for styling and the JavaScript file for logic.

- **style.css**: Contains the CSS styles for the application, defining the appearance of the body, weather app elements, including layout, fonts, colors, and styles for icons and details.

- **meteo.js**: Contains the JavaScript logic to fetch weather data from the OpenWeatherMap API. It uses the city configuration defined in `conf.json`, makes a fetch request to obtain the data, and updates the DOM with the retrieved weather information.

- **conf.json**: Contains the configuration for the city, specifying the city name and country code. It is used by `meteo.js` to construct the API URL.

## Setup
1. Clone the repository or download the project files.
2. Open in an IDE
3. launch the index.html file with your IDE local server.

## Usage
The application will automatically fetch the weather data for the configured city specified in `conf.json`. You can modify the city and country code in `conf.json` to get weather information for different locations.

## License
This project is open-source and available for modification and distribution.