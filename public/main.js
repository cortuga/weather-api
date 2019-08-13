const getWeather = () => {
  console.log("getting the weather");
  //get the user input

  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=tampa&appid=93ba71da97ad4cd92c7c9ea8576ae9f6"
  ).then(response => {
    console.log(response);
    document.querySelector(".city-conditions").textContent;
    document.querySelector("city-temp").textContent;
  });

  const query = document.querySelector("#searchQuery").value;

  //send api call
  // output to the screen
};

document //grab the search button, on click, search weather
  .querySelector(".search-button")
  .addEventListener("click", getWeather);
