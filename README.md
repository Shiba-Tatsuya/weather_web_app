# Weather App

The Weather App is a web application that provides weather information for a given city. Users can search for a city and get the current temperature, humidity, and wind speed. The app also displays an appropriate weather icon based on the weather conditions.

## Preview

You can see a live preview of the Weather App [here](https://shiba-tatsuya.github.io/weather_web_app/).

## HTML Structure

The HTML structure of the Weather App consists of the following elements:

- `<div class="card">`: This is the main container that wraps the entire app.
- `<div class="search">`: This div contains the search input and button elements.
- `<input type="text">`: This input element allows users to enter a city name.
- `<button>`: This button triggers the weather search.
- `<p class="error">`: This paragraph element displays an error message for invalid city names.
- `<div class="weather">`: This div contains the weather information.
- `<img class="weather-icon">`: This image element displays the weather icon.
- `<h1 class="temp">`: This heading element displays the current temperature.
- `<h2 class="city">`: This heading element displays the city name.
- `<div class="details">`: This div contains additional weather details.
- `<div class="col">`: This div represents a column within the details section.
- `<img>`: This image element displays an icon for a specific weather detail.
- `<p class="humidity">`: This paragraph element displays the humidity.
- `<p class="wind">`: This paragraph element displays the wind speed.

## JavaScript Functionality

The JavaScript file (`script.js`) contains the logic for fetching weather data from the OpenWeatherMap API and updating the UI with the retrieved data. Here's a brief overview of the functionality:

- The `checkWeather` function fetches weather data for a given city using the OpenWeatherMap API.
- If the city is valid, the weather data is displayed in the UI.
- If the city is invalid, an error message is displayed.
- The `btn` element listens for a click event and triggers the `checkWeather` function.

## CSS Styles

The CSS file (`style.css`) contains the styles that control the appearance of the Weather App. Here are the main CSS classes used:

- `.card`: Styles the main container of the app.
- `.search`: Styles the search input and button.
- `.error`: Styles the error message.
- `.weather`: Styles the weather information section.
- `.weather-icon`: Styles the weather icon image.
- `.temp`: Styles the temperature heading.
- `.city`: Styles the city name heading.
- `.details`: Styles the weather details section.
- `.col`: Styles the columns within the details section.
- `.humidity`: Styles the humidity paragraph.
- `.wind`: Styles the wind speed paragraph.
