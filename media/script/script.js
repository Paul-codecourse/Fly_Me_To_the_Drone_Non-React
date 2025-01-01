function saveData() {
    var checkbox1 = document.getElementById("checkbox1").checked;
    var checkbox2 = document.getElementById("checkbox2").checked;
    var checkbox3 = document.getElementById("checkbox3").checked;
    var checkbox4 = document.getElementById("checkbox4").checked;
    var checkbox5 = document.getElementById("checkbox5").checked;
    var checkbox6 = document.getElementById("checkbox6").checked;
  
    // Create an object to store the checkbox data
    var checkboxData = {
      checkbox1: checkbox1,
      checkbox2: checkbox2,
      checkbox3: checkbox3,
      checkbox4: checkbox4,
      checkbox5: checkbox5,
      checkbox6: checkbox6
    };
  
    // Convert the object to a JSON string
    var jsonData = JSON.stringify(checkboxData);
  
    // Save the JSON string to local storage
    localStorage.setItem("checkboxData", jsonData);
  
    alert("Checkbox data saved to local storage!");
  }
  