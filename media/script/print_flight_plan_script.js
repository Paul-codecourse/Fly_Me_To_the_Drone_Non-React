window.onload = function() {
    displayFlightPlanData();
    displayLastFiveFlightPlans();
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
  function displayLastFiveFlightPlans() {
    var flightPlans = JSON.parse(localStorage.getItem("flightPlans")) || [];
    var sidebar = document.getElementById("sidebar");

    // Clear previous buttons
    // sidebar.innerHTML = "";

    // Display the last 5 flight plans as buttons in the sidebar
    for (var i = Math.max(0, flightPlans.length - 5); i < flightPlans.length; i++) {
        var flightPlan = flightPlans[i];
        var button = document.createElement("button");
        button.className = "btn btn-primary sidebar-btn";
        button.textContent = "Flight Plan " + (i + 1); // You can adjust the button label as needed
        button.onclick = createFlightPlanClickHandler(flightPlan);
        sidebar.appendChild(button);
    }
}

function createFlightPlanClickHandler(flightPlan) {
    return function() {
        // Display the clicked flight plan details
        var flightPlanHTML = "<ul>";
        for (var key in flightPlan) {
            flightPlanHTML += "<li><strong>" + key + ":</strong> " + flightPlan[key] + "</li>";
        }
        flightPlanHTML += "</ul>";
        document.getElementById("flightPlanData").innerHTML = flightPlanHTML;
    };
}