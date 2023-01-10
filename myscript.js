// function that shows and hides navigation menu
function showMenu() {
  var links = document.getElementById("links");
  var nav = document.getElementById("nav");

  if (links.style.display === "block") {
    links.style.display = "none";
    nav.style.backgroundColor = ""
  } else {
    links.style.display = "block";
    nav.style.backgroundColor = "#648D8D"
  }
}

