document.getElementById("weatherSubmit").addEventListener("click", async function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=d98533809191eba2ff172f71c04207ee";
    try {
    const response = await fetch(url);
    const json = await response.json();
    
    console.log(json);
    let results = "";
    results += '<h2>Today\'s Weather in ' + json.name + "</h2>";
    for (let i=0; i < json.weather.length; i++) {
         results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
    }
    
    results += '<h2>' + json.main.temp + " &deg;F</h2>"
    results += "<p>"
    
    for (let i=0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
        results += ", "
    }
    results += "</p>";
    document.getElementById("weatherResults").innerHTML = results;

    } catch(err)
    {
        console.log("error", err);
    }





    // fetch(url)
    //     .then(function(response) {
    //     return response.json();
    //     }).then(function(json) {	
    //   console.log(json);
    // });
   
   
   
    if (value === "")
      return;
    console.log(value);
  });