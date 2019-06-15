let button01 = document.getElementById("Get Weather");
fetch(
  "https://api.darksky.net/forecast/de958546bbd9fa4d9e87c54b428f9ae1/35.1799752,-120.7318418"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // this is where you use the data coming in
    console.log(JSON.stringify(myJson));
  });
button01.addEventListener("click", fetch);
