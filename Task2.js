document.getElementById("searchButton").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    if (city) {
      getWeatherData(city);
    } else {
      alert("Please enter a city.");
    }
  });
  
//API(Application Programming Interface) acts as a security token that identifies the client requesting access to the API, ensuring that the request is coming from a Defined source.
  function getWeatherData(city) {
    const apiKey = "aba8a9067f96cb4772545edf0bd140f2";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    //fetch() function is used to make network requests to retrieve or send data to a server
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          /*throw statement is used to throw an exception or error, which can then be caught by a try...catch block to handle errors gracefully.*/
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
  
        //It Displays weather data
        document.getElementById("cityName").textContent = cityName;
        document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
        document.getElementById("description").textContent = `Description: ${description}`;
        document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
        document.getElementById("windSpeed").textContent = `Wind Speed: ${windSpeed} m/s`;
  
        //It Shows weather information
        document.getElementById("weatherInfo").style.display = "block";
      })
      .catch(error => {
        alert(error.message);
        document.getElementById("weatherInfo").style.display = "none";
      });
  }
  