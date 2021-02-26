let weather = {
  "apiKey": "fcb5f35e4d920642974c0cfbf9720f8b",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
       this.apiKey + "&units=metric"
    )
      .then((response) => response.json())
      .then((data) =>this.displayWeather(data));
  },
  displayWeather: function (data) {
    console.log(data)
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    console.log(name, description, temp, humidity);
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".location").innerText = "Weather in " + name;
    document.querySelector(".weather"). innerText = description;
    if (temp > 23){
      document.querySelector(".app").classList.add("warm")
    }else{
      document.querySelector(".app").classList.remove("warm")

    }
  },
};

document.querySelector(".search-bar").addEventListener("keyup", function(event){
 // console.log(event)
  if (event.key == "Enter") {
    const city = document.getElementById('search-bar').value;
    weather.fetchWeather(city);
    
  }
})