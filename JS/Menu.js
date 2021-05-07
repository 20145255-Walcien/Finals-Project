//this function lets the menu button drop down the list of navigation buttons
function menu () {
    var x = document.getElementById("menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }