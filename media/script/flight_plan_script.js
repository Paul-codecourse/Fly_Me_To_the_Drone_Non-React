function saveFlightPlanData() {
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var location = document.getElementById("location").value;
    var windSpeed = document.getElementById("windSpeed").value;
    var gusts = document.getElementById("gusts").value;
    var precipitation = document.getElementById("precipitation").value;
    var notams = document.getElementById("notams").value;
    var temperature = document.getElementById("temperature").value;
    var airspace = document.getElementById("airspace").value;
    var airport = document.getElementById("airport").value;
    var visibility = document.getElementById("visibility").value;
    var groundRestrictions = document.getElementById("groundRestrictions").value;
  
    // Create an object to store the flight plan data
    var flightPlanData = {
      date: date,
      time: time,
      location: location,
      windSpeed: windSpeed,
      gusts: gusts,
      precipitation: precipitation,
      notams: notams,
      temperature: temperature,
      airspace: airspace,
      airport: airport,
      visibility: visibility,
      groundRestrictions: groundRestrictions
    };
  
    // Convert the object to a JSON string
    var jsonData = JSON.stringify(flightPlanData);
  
    // Save the JSON string to local storage
    localStorage.setItem("flightPlanData", jsonData);
  
    alert("Flight plan data saved to local storage!");
  }
  