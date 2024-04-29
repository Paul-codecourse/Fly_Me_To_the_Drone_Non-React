window.onload = function() {
    displayFlightPlanData();
  };
  
  function displayFlightPlanData() {
    var flightPlanData = JSON.parse(localStorage.getItem("flightPlanData"));
  
    if (flightPlanData) {
      var flightPlanHTML = "<ul>";
  
      for (var key in flightPlanData) {
        flightPlanHTML += "<li><strong>" + key + ":</strong> " + flightPlanData[key] + "</li>";
      }
  
      flightPlanHTML += "</ul>";
  
      document.getElementById("flightPlanData").innerHTML = flightPlanHTML;
    } else {
      document.getElementById("flightPlanData").innerHTML = "<p>No flight plan data found.</p>";
    }
  }
  
  function printFlightPlan() {
    window.print();
  }  