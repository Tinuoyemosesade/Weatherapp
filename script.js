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
      .then((data) => console.log(data));
  },
  displayWeather: function (data) {},
};
