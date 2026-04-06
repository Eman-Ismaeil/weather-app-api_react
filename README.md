## Weather Application

A simple and responsive weather application built using **React** and a **Weather API**.
It allows users to search for any city and view real-time weather information.

---

## Features

* Search weather by city name
* Display current temperature
* Show weather condition (Cloudy, Sunny, etc.)
* Humidity and wind speed information
* Local time of the selected location
* Dynamic UI updates using React state

---

## Technologies Used

* React.js
* JavaScript (ES6+)
* Axios (for API requests)
* CSS3

---

## API Used

* Weather API (https://www.weatherapi.com/)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Navigate to the project folder:

```bash
cd weather-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

---

## Setup API Key

* Create an account at https://www.weatherapi.com/
* Get your API key
* Replace it in your code:

```javascript
key=YOUR_API_KEY
```

---

## How It Works

* The app fetches weather data using Axios from the API
* React Hooks (`useState`, `useEffect`) manage data and UI updates
* When the user enters a city and presses Enter, the app fetches new data and displays it instantly