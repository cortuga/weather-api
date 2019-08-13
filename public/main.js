let location = document.querySelector(".input-field");

const createProperQuery = () => {
  //proper construction is url + location + &appid= + &units=Imperial + apiKey
  let url = "http://api.openweathermap.org/data/2.5/weather?q=";
  let userInput = location.value;
  const apiKey = '93ba71da97ad4cd92c7c9ea8576ae9f6'
  let newQuery = url + location + '&appid=' + '&units=imperial' + apiKey;
  return newQuery;
};

const getWeatherFromSource = () => {
  // console.log("getting the weather, resp =>");
  fetch(newQuery())
    .then(response => {
      return response.json()
    })

  // fetch(
  //   "http://api.openweathermap.org/data/2.5/weather?q=tampa&appid=93ba71da97ad4cd92c7c9ea8576ae9f6"

  ).then(response => {
    console.log(response);
    document.querySelector(".city-conditions").textContent = location.weather[0];
    document.querySelector("city-temp").textContent =location.main.temp;
  });

  const query = document.querySelector("#searchQuery").value;
};

document //grab the search button, on click, search weather
  .querySelector(".search-button")
  .addEventListener("click", getWeatherFromSource);
