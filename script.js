let weather = {
  "apiKey": "fcb5f35e4d920642974c0cfbf9720f8b",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
       this.apiKey
    )
      .then((response) => response.json())
      .then((data) =>this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    console.log(name, icon, description, temp, humidity);
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".location").innerText = "Weather in " + name;
    document.querySelector(".weather"). innerText = description;
  },
};

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if (event.key == "Enter") {
    weather.search();
  }
})