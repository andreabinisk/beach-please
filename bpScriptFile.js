let button01 = document.getElementById("Get Weather");

fetch(
  "http://api.openweathermap.org/data/2.5/weather?lat=35.1799752&lon=-120.7318418&APPID=8eaf7058bd5a4db9700ee42db10f28bb"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // this is where you use the data coming in
    let result = [];
    for (let key in myJson) {
      result.push(myJson[key].main);
    }
  });
button01.addEventListener("click", fetch, false);
