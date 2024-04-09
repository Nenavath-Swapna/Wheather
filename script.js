document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "YOUR_API_KEY";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=" + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;

            document.getElementById("location").textContent = location;
            document.getElementById("temperature").textContent = temperature + "°C";
            document.getElementById("description").textContent = description;
        })
        .catch(error => console.log("Error fetching weather data:", error));
});
