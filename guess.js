function toDoList(event) {
  let input = prompt("What do you need to do today?");

  const todos = ["collect eggs", "clean litter box"];
  while (input !== "quit" && input !== "q") {
    if (input === "list") {
      console.log("********alert1");
      for (let i = 0; i < todos.length; i++) {
        alert(`${i}:${todos[i]}`);
      }
      console.log("alert2*************");
    } else if (input === "new") {
      const newToDo = prompt("Ok, what is your new to-do list item?");
      todos.push(newToDo);
      alert(`${newToDo} is now added to your list!`);
    } else if (input === "delete") {
      const index = parseInt(prompt("Ok, enter an index to delete:"));
      if (!Number.isNan(index)) {
        const deleted = todos.splice(index, 1);
        alert("Ok, deleted ${deleted[0]} for you.");
      } else {
        console.log("unknown index");
      }
    }
    input = prompt("What would you like to do?");
  }
  alert("Ok! See you next time!");
}
let launchList = document.querySelector("#launch-list");
launchList.addEventListener("click", toDoList);

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours} ${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  cityElement.innerHTML = response.data.name;

  descriptionElement.innerHTML = response.data.weather[0].description;

  humidityElement.innerHTML = response.data.main.humidity;

  windElement.innerHTML = Math.round(response.data.wind.speed);

  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "0aa51f2ae72d62c67ab574237edb123f";
let city = "Los Angeles";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
