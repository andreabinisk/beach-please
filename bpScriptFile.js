fetch("http://example.com/movies.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // this is where you use the data coming in
    console.log(JSON.stringify(myJson));
  });
